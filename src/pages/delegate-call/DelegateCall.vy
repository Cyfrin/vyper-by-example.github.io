# @version ^0.3.3


x: public(uint256)
y: public(uint256)


@external
def updateX(to: address, x: uint256):
    raw_call(
        to,
        concat(
            method_id("updateX(uint256)"),
            convert(x, bytes32)
        ),
        is_delegate_call=True
    )


@external
def updateY(to: address, y: uint256):
    raw_call(
        to,
        concat(
            method_id("updateY(uint256)"),
            convert(y, bytes32)
        ),
        is_delegate_call=True
    )
