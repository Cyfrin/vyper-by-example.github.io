# @version ^0.3.3


# Receive Ether into this contract
@external
@payable
def __default__():
    pass


@external
def sendEther(to: address, amount: uint256):
    # when Ether is sent to a contract it will call 
    # __default__ inside the receiving contract
    # forwards 2300 gas
    send(to, amount)


@external
def sendAll(to: address):
    send(to, self.balance)
