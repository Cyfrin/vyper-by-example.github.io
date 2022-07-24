# @version ^0.3.3


@external
@payable
def __default__():
    pass


@external
def kill():
    selfdestruct(msg.sender)


@external
def burn():
    selfdestruct(ZERO_ADDRESS)
