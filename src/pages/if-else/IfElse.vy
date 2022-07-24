# @version ^0.3.3


@external
def ifElse(x: uint256) -> uint256:
    if x <= 10:
        return 1
    elif x <= 20:
        return 2
    else:
        return 3


@external
@pure
def absoluteValue(x: uint256, y: uint256) -> uint256:
    if x >= y:
        return x - y
    return y - x
