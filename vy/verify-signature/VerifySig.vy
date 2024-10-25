# pragma version ^0.4.0

# 1. Hash data to sign
# 2. Sign data offchain
# 3. Verify signature onchain

@external
@pure
def get_hash(msg_str: String[100]) -> bytes32:
    return keccak256(msg_str)

@external
@pure
def get_eth_hash(msg_hash: bytes32) -> bytes32:
    return keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            msg_hash
        )
    )

@external
@pure
def recover_signer(eth_signed_hash: bytes32, sig: Bytes[65]) -> address:
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    return ecrecover(eth_signed_hash, v, r, s)

# Elliptic Curve Digital Signature Algorithm (ECDSA)
# accounts = await ethereum.request({ method: "eth_requestAccounts" })
# account = accounts[0]
# h = get_hash("vyper")
# signature = await ethereum.request({ method: "personal_sign", params: [account, h]})
@external
@pure
def verify(sig: Bytes[65], msg_str: String[100], signer: address) -> bool:
    h: bytes32 = keccak256(msg_str)
    eth_hash: bytes32 = keccak256(
        concat(b"\x19Ethereum Signed Message:\n32", h)
    )
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    recovered_addr: address = ecrecover(eth_hash, v, r, s)
    return recovered_addr == signer

