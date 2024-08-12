# @pragma version ^0.4.0

event Payment:
    sender: indexed(address)
    amount: uint256

@external
@payable
def __default__():
    log Payment(msg.sender, msg.value)
