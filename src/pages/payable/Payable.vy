# @version ^0.3.3


event Deposit:
    sender: indexed(address)
    amount: uint256


@external
@payable
def deposit():
    log Deposit(msg.sender, msg.value)


@external
@view
def getBalance() -> uint256:
    # Get balance of Ether stored in this contract
    return self.balance


owner: public(address)


@external
@payable
def pay():
    assert msg.value > 0, "msg.value = 0"
    self.owner = msg.sender
