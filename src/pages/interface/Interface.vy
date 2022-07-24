# @version ^0.3.3


interface TestInterface:
    # get address of owner
    def owner() -> address: view
    # set new owner
    def setOwner(owner: address): nonpayable
    # send ETH
    def sendEth(): payable
    # set owner and send ETH
    def setOwnerAndSendEth(owner: address): payable


# store contract having the above interface
test: public(TestInterface)


@external
def __init__(test: address):
    # store contract instance
    self.test = TestInterface(test)
    # if you need to get address from self.test
    addr: address = self.test.address


@external
@view
def getOwner() -> address:
    return self.test.owner()


@external
@view
def getOwnerFromAddress(test: address) -> address:
    # you can also call functions by passing in the address of the interface
    return TestInterface(test).owner()


@external
def setOwner(owner: address):
    self.test.setOwner(owner)


@external
@payable
def sendEth():
    self.test.sendEth(value=msg.value)


@external
@payable
def setOwnerAndSendEth(owner: address):
    self.test.setOwnerAndSendEth(owner, value=msg.value)
