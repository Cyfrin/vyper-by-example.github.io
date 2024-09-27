# pragma version ^0.4.0

owner: public(address)
eth: public(uint256)

@external
def set_owner(owner: address):
    self.owner = owner

@external
@payable
def send_eth():
    self.eth = msg.value

@external
@payable
def set_owner_and_send_eth(owner: address):
    self.owner = owner
    self.eth = msg.value
