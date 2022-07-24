# @version ^0.3.3

num: public(uint256)

# Pure functions does not read any state or global variables
@external
@pure
def pureFunc(x: uint256) -> uint256:
    return x


# View functions might read state or global state, or call an internal function
@external
@view
def viewFunc(x: uint256) -> bool:
    return x > self.num


@external
@pure
def sum(x: uint256, y: uint256, z: uint256) -> uint256:
    return x + y + z


@external
@view
def addNum(x: uint256) -> uint256:
    return x + self.num
