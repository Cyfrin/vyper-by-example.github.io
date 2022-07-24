# @version ^0.3.3

OWNER: immutable(address)
MY_IMMUTABLE: immutable(uint256)

@external
def __init__(_val: uint256):
    OWNER = msg.sender
    MY_IMMUTABLE = _val


@external
@pure
def getMyImmutable() -> uint256:
  return MY_IMMUTABLE