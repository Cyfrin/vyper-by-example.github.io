# @pragma version ^0.4.0

x: public(uint256)
y: public(uint256)

@external
def update_x(to: address, x: uint256):
    raw_call(
        to,
        concat(
            method_id("update_x(uint256)"),
            convert(x, bytes32)
        ),
        is_delegate_call=True
    )

@external
def update_y(to: address, y: uint256):
    raw_call(
        to,
        concat(
            method_id("update_y(uint256)"),
            convert(y, bytes32)
        ),
        is_delegate_call=True
    )
