# @version ^0.3.9

@external
def test_print():
    x: uint256 = 123
    # Set hardhat_compat = True when testing with Hardhat
    print("print something here", x, hardhat_compat=True)


