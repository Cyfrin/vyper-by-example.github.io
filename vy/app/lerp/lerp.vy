#pragma version 0.4.0

y0: public(uint256)
y1: public(uint256)
t0: public(uint256)
t1: public(uint256)

@deploy
def __init__():
    self.y0 = 10
    self.y1 = 20
    self.t0 = block.timestamp + 30
    self.t1 = block.timestamp + 60


@external
def lerp() -> uint256:
    return self._lerp(self.y0, self.y1, self.t0, self.t1, block.timestamp)

@internal
def _lerp(y0: uint256, y1: uint256, x0: uint256, x1: uint256, x: uint256) -> uint256:
    assert x0 < x1

    if x <= x0:
        return y0

    if x >= x1:
        return y1

    # w(x) = (x - x0) / (x1 - x0)
    # f(x) = y0*(1 - w(x)) + y1*w(x)
    #      = (y0*((x1 - x0) - (x - x0)) + y1*(x - x0)) / (x1 - x0)
    x1_x: uint256 = x1 - x
    x_x0: uint256 = x - x0
    x1_x0: uint256 = x1 - x0

    return (y0*x1_x + y1*x_x0) // x1_x0

