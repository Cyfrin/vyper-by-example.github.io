# pragma version ^0.4.0

event Transfer:
    src: indexed(address)
    dst: indexed(address)
    amount: uint256

@external
def transfer(to: address, amount: uint256):
    log Transfer(msg.sender, to, amount)

