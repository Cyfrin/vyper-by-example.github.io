# @pragma version ^0.4.0

interface TestInterface:
    # get address of owner
    def owner() -> address: view
    # set new owner
    def set_owner(owner: address): nonpayable
    # send ETH
    def send_eth(): payable
    # set owner and send ETH
    def set_owner_and_send_eth(owner: address): payable

# store contract having the above interface
test: public(TestInterface)

@deploy
def __init__(test: address):
    # store contract instance
    self.test = TestInterface(test)
    # if you need to get address from self.test
    addr: address = self.test.address

@external
@view
def get_owner() -> address:
    return staticcall self.test.owner()

@external
@view
def get_owner_from_addr(test: address) -> address:
    # you can also call functions by passing in the address of the interface
    return staticcall TestInterface(test).owner()

@external
def set_owner(owner: address):
    extcall self.test.set_owner(owner)

@external
@payable
def send_eth():
    extcall self.test.send_eth(value=msg.value)

@external
@payable
def set_owner_and_send_eth(owner: address):
    extcall self.test.set_owner_and_send_eth(owner, value=msg.value)
