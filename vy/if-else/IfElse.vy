# @pragma version ^0.4.0

@external
def if_else(x: uint256) -> uint256:
    if x <= 10:
        return 1
    elif x <= 20:
        return 2
    else:
        return 3

@external
@pure
def abs_value(x: uint256, y: uint256) -> uint256:
    if x >= y:
        return x - y
    return y - x
