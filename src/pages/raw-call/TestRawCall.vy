# @version ^0.3.3


sender: public(address)


@external
def testAdd(x: uint256, y: uint256) -> uint256:
    self.sender = msg.sender
    return x + y


@external
def testSub(x: uint256, y: uint256) -> uint256:
    self.sender = msg.sender
    return x - y
