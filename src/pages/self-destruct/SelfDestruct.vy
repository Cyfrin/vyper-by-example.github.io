# @pragma version ^0.4.0

@external
@payable
def __default__():
    pass

@external
def kill():
    selfdestruct(msg.sender)
