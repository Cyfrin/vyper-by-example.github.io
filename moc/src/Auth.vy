# pragma version ^0.4.0

owner: public(address)

@deploy
def __init__():
    self.owner = msg.sender

@internal
@view
def _check_owner():
    assert self.owner == msg.sender

@external
def set_owner(owner: address):
    self._check_owner()
    self.owner = owner
