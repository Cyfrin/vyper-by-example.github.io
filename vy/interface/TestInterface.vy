# pragma version ^0.4.0

val: public(uint256)
msg_value: public(uint256)

@external
def set_val(val: uint256):
    self.val = val

@external
@payable
def set_val_with_msg_value(val: uint256):
    self.val = val
    self.msg_value = msg.value

@external
def set_val_return_val(val: uint256) -> uint256:
    self.val = val
    return val

@external
@view
def get_val() -> uint256:
    return self.val

