# pragma version ^0.4.0

ends_at: public(uint256)
ended: public(bool)

@deploy
def __init__():
    self.ends_at = block.timestamp + 1000

@external
def close():
    assert block.timestamp >= self.ends_at
    self.ended = True


