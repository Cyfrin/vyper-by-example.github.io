# pragma version ^0.4.0

MAX_TX_DATA_SIZE: constant(uint256) = 1000

# Max owners
M: public(constant(uint256)) = 5
# Number of signatures required
k: public(uint256)
# Mapping storing address of owners
auth: public(HashMap[address, bool])
owners: public(DynArray[address, M])
# Nonce used to invalidate executed transaction
nonce: public(uint256)

event Execute:
    tx_id: indexed(bytes32)
    to: indexed(address)
    data: Bytes[MAX_TX_DATA_SIZE]
    val: uint256
    nonce: uint256

@deploy
def __init__(k: uint256, owners: DynArray[address, M]):
    n: uint256 = len(owners)

    assert 0 < n, "n = 0"
    assert n <= M, "n > max"
    assert 0 < k, "k = 0"
    assert k <= n, "k > n"

    self.k = k

    for owner: address in owners:
        assert owner != empty(address), "owner = 0 address"
        assert not self.auth[owner], "duplicate owner"
        self.auth[owner] = True

    self.owners = owners

@external
@payable
def __default__():
    pass

@internal
@view
def _check_auth():
    assert self.auth[msg.sender], "not authorized"

@internal
@view
def _check_self():
    assert msg.sender == self, "not authorized"

@external
def set(k: uint256):
    self._check_self()
    assert k > 0, "k = 0"
    assert k <= len(self.owners), "k > n"
    self.k = k

@external
def add(addr: address):
    self._check_self()
    assert addr != empty(address), "0 address"
    assert not self.auth[addr], "already owner"

    self.owners.append(addr)
    self.auth[addr] = True

    assert len(self.owners) <= M, "n > max"

@external
def remove(i: uint256):
    self._check_self()

    addr: address = self.owners[i]
    last: address = self.owners.pop()
    if addr != last:
        self.owners[i] = last

    self.auth[addr] = False

    assert len(self.owners) >= self.k, "n < k"

@internal
@view
def _get_tx_id(
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    nonce: uint256
) -> bytes32:
    return keccak256(
        concat(
            convert(chain.id, bytes32),
            convert(self, bytes32),
            convert(to, bytes32),
            data,
            convert(val, bytes32),
            convert(nonce, bytes32),
        )
    )

@external
@view
def get_tx_id(to: address, data: Bytes[MAX_TX_DATA_SIZE], val: uint256, nonce: uint256) -> bytes32:
    return self._get_tx_id(to, data, val, nonce)

@internal
@pure
def _get_eth_hash(tx_id: bytes32) -> bytes32:
    return keccak256(
        concat(
            b'\x19Ethereum Signed Message:\n32',
            tx_id
        )
    )

@external
@pure
def get_eth_hash(tx_id: bytes32) -> bytes32:
    return self._get_eth_hash(tx_id)

@internal
@pure
def _verify(sig: Bytes[65], eth_hash: bytes32, signer: address) -> bool:
    r: uint256 = convert(slice(sig, 0, 32), uint256)
    s: uint256 = convert(slice(sig, 32, 32), uint256)
    v: uint256 = convert(slice(sig, 64, 1), uint256)
    return ecrecover(eth_hash, v, r, s) == signer

@external
@pure
def verify(sig: Bytes[65], eth_hash: bytes32, signer: address) -> bool:
    return self._verify(sig, eth_hash, signer)

@external
@payable
@nonreentrant
def exec(
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    signers: DynArray[address, M],
    sigs: DynArray[Bytes[65], M]
):
    self._check_auth()
    assert len(signers) == len(sigs), "len(signers) != len(sigs)"
    assert len(signers) == self.k, "signers < k"

    nonce: uint256 = self.nonce
    tx_id: bytes32 = self._get_tx_id(to, data, val, nonce)
    eth_hash: bytes32 = self._get_eth_hash(tx_id)

    prev: address = empty(address)
    for i: uint256 in range(len(signers), bound = M):
        signer: address = signers[i]
        sig: Bytes[65] = sigs[i]

        assert self.auth[signer], "not authorized"
        assert convert(prev, uint256) < convert(signer, uint256), "duplicate or unsorted signer"
        prev = signer

        assert self._verify(sig, eth_hash, signer), "invalid sig"

    self.nonce = nonce + 1
    raw_call(to, data, value = val)

    log Execute(tx_id, to, data, val, nonce)

