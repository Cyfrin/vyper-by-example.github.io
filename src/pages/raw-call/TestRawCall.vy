# pragma version ^0.4.0


sender: public(address)

@external
def test_add(x: uint256, y: uint256) -> uint256:
    self.sender = msg.sender
    return x + y

@external
def test_sub(x: uint256, y: uint256) -> uint256:
    self.sender = msg.sender
    return x - y
