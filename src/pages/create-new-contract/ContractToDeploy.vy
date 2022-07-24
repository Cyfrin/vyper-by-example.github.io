# @version ^0.3.3


owner: public(address)


# __init__ is not called when deployed from create_forwarder_to
@external
def __init__():
  self.owner = msg.sender


# call once after create_forwarder_to
@external
def setup(owner: address):
  assert self.owner == ZERO_ADDRESS, "owner != zero address"
  self.owner = owner


# DANGER: never have selfdestruct in original contract used by create_forwarder_to
@external
def kill():
  selfdestruct(msg.sender)
