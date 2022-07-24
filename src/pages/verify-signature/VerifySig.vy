# @version ^0.3.3


# hash = getHash("Hello Vyper!")
# 0x5436c86f18e3d25a10e557ae125450118dd0a481ca22112b1977d55a676e4c91
@external
@pure
def getHash(_str: String[100]) -> bytes32:
    return keccak256(_str)


# getEthSignedHash(hash)
# 0x045b623a8e8fb7b4fcfbd1ae07e7326d55303d7de4085c69b346bd130c1936da
@external
@pure
def getEthSignedHash(_hash: bytes32) -> bytes32:
    return keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            _hash
        )
    )


# account = your account
# hash = getHash("Hello Vyper!")
# signature = await ethereum.request({ method: "personal_sign", params: [account, hash]})
@external
@pure
def recoverSigner(ethSignedHash: bytes32, sig: Bytes[65]) -> address:
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    return ecrecover(ethSignedHash, v, r, s)


@external
@pure
def verify(sig: Bytes[65], _str: String[100], _signer: address) -> bool:
    _hash: bytes32 = keccak256(_str)
    ethSignedHash: bytes32 = keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            _hash
        )
    )
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    signer: address = ecrecover(ethSignedHash, v, r, s)

    return _signer == signer
