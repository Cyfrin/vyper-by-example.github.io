# @version ^0.3.3

MY_CONSTANT: constant(uint256) = 123
MIN: constant(uint256) = 1
MAX: constant(uint256) = 10
ADDR: constant(address) = 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B


@external
@pure
def getBuiltInConstants() -> (address, uint256, bytes32):
    # Commonly used constants availabe in Vyper
    return (ZERO_ADDRESS, MAX_UINT256, EMPTY_BYTES32)


@external
@pure
def getMyConstants() -> (uint256, uint256, address):
    return (MIN, MAX, ADDR)
