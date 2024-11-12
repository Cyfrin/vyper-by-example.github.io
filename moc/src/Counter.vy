# SPDX-License-Identifier: MIT
# pragma version 0.4.0

count: public(uint256)

@external
def inc():
    self.count += 1

@external
def dec():
    self.count -= 1
