# @version ^0.3.3

x: public(uint256)
owner: public(address)


@external
def __init__():
    self.owner = msg.sender


@external
def testAssert(x: uint256):
    assert x >= 1, "x < 1"
    # self.x will not be updated if there is an error from line above
    self.x = x


@external
def testRaise(x: uint256):
    # same check as above using "raise"
    if x <= 1:
        raise "x < 1"
    self.x = x


@internal
def _testErrorBubblesUp(x: uint256):
    assert x >= 1, "x < 1"
    self.x = x


@external
def testErrorBubblesUp(x: uint256):
    self._testErrorBubblesUp(x)
    # self.x = 123 will not be executed if there is an error
    # from function above
    self.x = 123


@external
def setOwner(owner: address):
    assert msg.sender == self.owner, "!owner"
    assert owner != ZERO_ADDRESS, "owner = zero"
    self.owner = owner
