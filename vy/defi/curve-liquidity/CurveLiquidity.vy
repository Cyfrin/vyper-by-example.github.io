# pragma version ^0.4.0

from ethereum.ercs import IERC20

interface IStableSwap:
    def add_liquidity(amounts: uint256[3], min_shares: uint256): nonpayable
    def remove_liquidity(shares: uint256, min_amounts: uint256[3]): nonpayable
    def remove_liquidity_one_coin(shares: uint256, i: int128, min_amount: uint256): nonpayable
    def get_virtual_price() -> uint256: view

DAI: constant(address) = 0x6B175474E89094C44Da98b954EedeAC495271d0F
USDC: constant(address) = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
USDT: constant(address) = 0xdAC17F958D2ee523a2206206994597C13D831ec7

POOL: constant(address) = 0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7
COINS: constant(address[3]) = [DAI, USDC, USDT]

@internal
def _safe_transfer(coin: address, to: address, amount: uint256):
    res: Bytes[32] = raw_call(
        coin,
        concat(
            method_id("transfer(address,uint256)"),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=32,
    )
    if len(res) > 0:
        assert convert(res, bool)

@internal
def _safe_transfer_from(coin: address, _from: address, to: address, amount: uint256):
    res: Bytes[32] = raw_call(
        coin,
        concat(
            method_id("transferFrom(address,address,uint256)"),
            convert(_from, bytes32),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=32,
    )
    if len(res) > 0:
        assert convert(res, bool)

@internal
def _safe_approve(coin: address, to: address, amount: uint256):
    res: Bytes[32] = raw_call(
        coin,
        concat(
            method_id("approve(address,uint256)"),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=32,
    )
    if len(res) > 0:
        assert convert(res, bool)

@external
def add_liquidity(amounts: uint256[3], min_shares: uint256):
    for i: uint256 in range(3):
        if amounts[i] > 0:
            self._safe_transfer_from(COINS[i], msg.sender, self, amounts[i])
            self._safe_approve(COINS[i], POOL, amounts[i])

    extcall IStableSwap(POOL).add_liquidity(amounts, min_shares)

@external
@view
def calc_value_of_shares(shares: uint256) -> uint256:
    return shares * staticcall IStableSwap(POOL).get_virtual_price() // 10**18

@external
def remove_liquidity(shares: uint256, min_amounts: uint256[3]):
    extcall IStableSwap(POOL).remove_liquidity(shares, min_amounts)

    for coin: address in [DAI, USDC, USDT]:
        bal: uint256 = staticcall IERC20(coin).balanceOf(self)
        self._safe_transfer(coin, msg.sender, bal)

@external
def remove_liquidity_one_coin(shares: uint256, i: int128, min_amount: uint256):
    extcall IStableSwap(POOL).remove_liquidity_one_coin(shares, i, min_amount)

    bal: uint256 = staticcall IERC20(COINS[i]).balanceOf(self)
    self._safe_transfer(COINS[i], msg.sender, bal)
