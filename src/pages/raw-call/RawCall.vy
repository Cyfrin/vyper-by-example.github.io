# @pragma version ^0.4.0

@external
def test_raw_call(to: address, x: uint256, y: uint256):
    res: Bytes[32] = raw_call(
        to, # address to call
        # data to send in Bytes
        concat(
            method_id("test_add(uint256,uint256)"), # function to call
            convert(x, bytes32), # first input
            convert(y, bytes32), # secode input
        ),
        max_outsize=32, # max size of ouput, default 0
        gas=100000, # optional, amount of gas to send, default forwards all gas
        value=0, # optional, amount of ETH to send, default 0
    )
    z: uint256 = convert(res, uint256)

@external
@payable
def send_eth(to: address):
    # Example to send ETH
    # data = b"", empty data
    # value = msg.value, all of ETH that was sent to this function
    raw_call(to, b"", value=msg.value)

diff: public(uint256)

@external
def test_raw_call_sub(to: address, x: uint256, y: uint256):
    res: Bytes[32] = raw_call(
        to,
        concat(
            method_id("test_sub(uint256,uint256)"),
            convert(x, bytes32),
            convert(y, bytes32)
        ),
        max_outsize=32,
    )

    self.diff = convert(res, uint256)
