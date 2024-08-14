# pragma version ^0.4.0

import auth
import math

# Need to call auth.__init__()
initializes: auth
# Exports auth.set_owner and auth.owner
exports: (auth.set_owner, auth.owner)

my_num: public(uint256)

@deploy
def __init__():
    auth.__init__()

# Example of calling auth._check_owner
@external
def set_my_num(x: uint256):
    auth._check_owner()
    self.my_num = x

# Example of reading auth.owner
@external
@view
def get_owner() -> address:
    return auth.owner

# Example of importing and using a pure function
@external
@pure
def my_func(x: uint256, y: uint256) -> uint256:
    return math.mul(x, y)

