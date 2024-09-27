# pragma version ^0.4.0

x: public(uint256)
owner: public(address)

@deploy
def __init__():
    self.owner = msg.sender

@external
def test_assert(x: uint256):
    assert x >= 1, "x < 1"
    # self.x will not be updated if there is an error from line above
    self.x = x

@external
def test_raise(x: uint256):
    # same check as above using "raise"
    if x <= 1:
        raise "x < 1"
    self.x = x

@internal
def _test_error_bubbles_up(x: uint256):
    assert x >= 1, "x < 1"
    self.x = x

@external
def test_error_bubbles_up(x: uint256):
    self._test_error_bubbles_up(x)
    # self.x = 123 will not be executed if there is an error
    # from function above
    self.x = 123

@external
def set_owner(owner: address):
    assert msg.sender == self.owner, "!owner"
    assert owner != empty(address), "owner = zero"
    self.owner = owner
