# @version ^0.3.3

# State variables must be declared in the same order
# as contract making the call
x: public(uint256)
y: public(uint256)


@external
def updateX(x: uint256):
    # when this function is called with delegate call
    # this will update self.x inside the calling contract
    self.x = x + 1


@external
def updateY(y: uint256):
    self.y = y * y
