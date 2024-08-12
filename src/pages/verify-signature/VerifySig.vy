# @pragma version ^0.4.0

# hash = get_hash("Hello Vyper!")
# 0x5436c86f18e3d25a10e557ae125450118dd0a481ca22112b1977d55a676e4c91
@external
@pure
def get_hash(str: String[100]) -> bytes32:
    return keccak256(str)

# get_eth_signed_hash(hash)
# 0x045b623a8e8fb7b4fcfbd1ae07e7326d55303d7de4085c69b346bd130c1936da
@external
@pure
def get_eth_signed_hash(hash: bytes32) -> bytes32:
    return keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            hash
        )
    )

# account = your account
# hash = get_hash("Hello Vyper!")
# signature = await ethereum.request({ method: "personal_sign", params: [account, hash]})
@external
@pure
def recover_signer(eth_signed_hash: bytes32, sig: Bytes[65]) -> address:
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    return ecrecover(eth_signed_hash, v, r, s)

@external
@pure
def verify(sig: Bytes[65], str: String[100], _signer: address) -> bool:
    hash: bytes32 = keccak256(str)
    eth_signed_hash: bytes32 = keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            hash
        )
    )
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    signer: address = ecrecover(eth_signed_hash, v, r, s)

    return _signer == signer
