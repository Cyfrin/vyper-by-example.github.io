# @version ^0.3.9


@external
@pure
def multiply(x: uint256, y: uint256) -> uint256:
    return x * y


@external
@pure
def divide(x: uint256, y: uint256) -> uint256:
    return x / y


# A funciton that does nothing
@external
def doNothing():
    # pass is useful when you want to compile the contract now,
    # write the code later
    pass


# Functions can return multiple outputs
@external
@pure
def multiOut() -> (uint256, bool):
    return (1, True)


@external
@pure
def addAndSub(x: uint256, y: uint256) -> (uint256, uint256):
    return (x + y, x - y)
