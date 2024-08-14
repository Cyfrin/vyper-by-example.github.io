# @pragma version ^0.4.0

# Rebase token (compound interest rate)

RAY: constant(uint256) = 10**27
MIN_R: constant(uint256) = 10**25

authorized: public(HashMap[address, bool])
pie: public(uint256)
slices: public(HashMap[address, uint256])
rate: public(uint256)
acc: public(uint256)
t: public(uint256)

@deploy
def __init__():
    self.authorized[msg.sender] = True
    self.rate = RAY
    self.acc = RAY
    self.t = block.timestamp

@external
def set_rate(ray: uint256):
    assert self.authorized[msg.sender]
    assert self.t == block.timestamp
    self.rate = ray

@internal
@view
def r() -> uint256:
    n: uint256 = (block.timestamp - self.t)
    if n > 0:
        rate: uint256 = self.rate
        if rate > RAY:
            # rate = 1 + x
            x: uint256 = rate - RAY
            # binomial expansion
            # (1+x)^n = 1 + n*x + (n*(n-1)/2*x^2) + (n*(n-1)*(n-2)/(2*3)*x^3) + ...
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - 1) if n > 1 else 0) // 2 * x // RAY
            x3: uint256 = x2 * ((n - 2) if n > 2 else 0) // 3 * x // RAY
            return RAY + x1 + x2 + x3
        elif rate < RAY:
            # rate = 1 - x
            x: uint256 = RAY - rate
            # binomial expansion
            # (1-x)^n = 1 - n*x + (n*(n-1)/2*x^2) - (n*(n-1)*(n-2)/(2*3)*x^3) + ...
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - 1) if n > 1 else 0) // 2 * x // RAY
            x3: uint256 = x2 * ((n - 2) if n > 2 else 0) // 3 * x // RAY
            # Check underflow and min
            # RAY - x1 + x2 - x3 <= MIN_R
            if RAY + x2 < MIN_R + x1 + x3:
                return MIN_R
            return RAY - x1 + x2 - x3
        else:
            return RAY
    return RAY

@internal
@view
def a() -> uint256:
    return self.acc * self.r() // RAY

@external
@view
def total_supply() -> uint256:
    return self.pie * self.a() // RAY

@external
@view
def balance_of(usr: address) -> uint256:
    return self.slices[usr] * self.a() // RAY

@external
def poke():
    self.acc *= self.r() // RAY
    self.t = block.timestamp

@external
def mint(dst: address, amt: uint256):
    assert self.authorized[msg.sender]
    assert self.t == block.timestamp
    a: uint256 = self.acc
    s: uint256 = amt * RAY // a
    assert s > 0
    self.slices[dst] += s
    self.pie += s

@external
def burn(amt: uint256):
    if amt == max_value(uint256):
        self.pie -= self.slices[msg.sender]
        self.slices[msg.sender] = 0
    else:
        assert self.t == block.timestamp
        a: uint256 = self.acc
        s: uint256 = amt * RAY // a
        assert s > 0
        self.pie -= s
        self.slices[msg.sender] -= s

@external
def transfer(dst: address, amt: uint256):
    if amt == max_value(uint256):
        self.slices[dst] += self.slices[msg.sender]
        self.slices[msg.sender] = 0
    else:
        assert self.t == block.timestamp
        a: uint256 = self.acc
        s: uint256 = amt * RAY // a
        self.slices[msg.sender] -= s
        self.slices[dst] += s
