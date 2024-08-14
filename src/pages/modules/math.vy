# pragma version ^0.4.0

# Pure function can easily be reused in importing module
@pure
def mul(x: uint256, y: uint256) -> uint256:
    return x * y

# Not included in final code if not used by importing module
@pure
def div(x: uint256, y: uint256) -> uint256:
    return x // y