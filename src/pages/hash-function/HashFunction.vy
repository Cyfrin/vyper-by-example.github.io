# @version ^0.3.3


@external
@pure
def getHash(addr: address, num: uint256, ) -> bytes32:
    # input of keccak256 can be String, Bytes or bytes32
    return keccak256(
        # convert different data into Bytes
        concat(
            convert(addr, bytes32),
            convert(num, bytes32),
            convert("THIS IS A STRING", Bytes[16])
        )
    )


@external
@pure
def getMessageHash(_str: String[100]) -> bytes32:
    return keccak256(_str)
