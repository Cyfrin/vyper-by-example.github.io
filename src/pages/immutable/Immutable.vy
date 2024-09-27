# pragma version ^0.4.0

OWNER: immutable(address)
MY_IMMUTABLE: immutable(uint256)

@deploy
def __init__(val: uint256):
    OWNER = msg.sender
    MY_IMMUTABLE = val


@external
@view
def get_my_immutable() -> uint256:
  return MY_IMMUTABLE
