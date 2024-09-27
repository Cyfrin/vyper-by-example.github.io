# pragma version ^0.4.0

import math
# Other ways to import
# import math as m
# from . import math
# from . import math as m

@external
@pure
def call_math_mul(x: uint256, y: uint256) -> uint256:
  return math.mul(x, y)
