// metadata
export const version = "0.4.0"
export const title = "Curve Add and Remove Liquidity"
export const description = "Curve Add and Remove Liquidity"

export const keywords = ["curve", "add", "remove liquidity", "defi", "amm"]

const html = `<p>Add and remove liquidity from Curve pools</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">from</span> ethereum.ercs <span class="hljs-keyword">import</span> IERC20

interface IStableSwap:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">add_liquidity</span>(<span class="hljs-params">amounts: uint256[<span class="hljs-number">3</span>], min_shares: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity</span>(<span class="hljs-params">shares: uint256, min_amounts: uint256[<span class="hljs-number">3</span>]</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity_one_coin</span>(<span class="hljs-params">shares: uint256, i: int128, min_amount: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_virtual_price</span>() -&gt; uint256: view

DAI: constant(address) = <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>
USDC: constant(address) = <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>
USDT: constant(address) = <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>

POOL: constant(address) = <span class="hljs-number">0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7</span>
COINS: constant(address[<span class="hljs-number">3</span>]) = [DAI, USDC, USDT]

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transfer(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_transfer_from</span>(<span class="hljs-params">coin: address, _<span class="hljs-keyword">from</span>: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"transferFrom(address,address,uint256)"</span>),
            convert(_<span class="hljs-keyword">from</span>, bytes32),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safe_approve</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        coin,
        concat(
            method_id(<span class="hljs-string">"approve(address,uint256)"</span>),
            convert(to, bytes32),
            convert(amount, bytes32),
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )
    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(res) &gt; <span class="hljs-number">0</span>:
        <span class="hljs-keyword">assert</span> convert(res, <span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">add_liquidity</span>(<span class="hljs-params">amounts: uint256[<span class="hljs-number">3</span>], min_shares: uint256</span>):
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):
        <span class="hljs-keyword">if</span> amounts[i] &gt; <span class="hljs-number">0</span>:
            <span class="hljs-variable language_">self</span>._safe_transfer_from(COINS[i], msg.sender, <span class="hljs-variable language_">self</span>, amounts[i])
            <span class="hljs-variable language_">self</span>._safe_approve(COINS[i], POOL, amounts[i])

    extcall IStableSwap(POOL).add_liquidity(amounts, min_shares)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">calc_value_of_shares</span>(<span class="hljs-params">shares: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> shares * staticcall IStableSwap(POOL).get_virtual_price() // <span class="hljs-number">10</span>**<span class="hljs-number">18</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity</span>(<span class="hljs-params">shares: uint256, min_amounts: uint256[<span class="hljs-number">3</span>]</span>):
    extcall IStableSwap(POOL).remove_liquidity(shares, min_amounts)

    <span class="hljs-keyword">for</span> coin: address <span class="hljs-keyword">in</span> [DAI, USDC, USDT]:
        bal: uint256 = staticcall IERC20(coin).balanceOf(<span class="hljs-variable language_">self</span>)
        <span class="hljs-variable language_">self</span>._safe_transfer(coin, msg.sender, bal)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove_liquidity_one_coin</span>(<span class="hljs-params">shares: uint256, i: int128, min_amount: uint256</span>):
    extcall IStableSwap(POOL).remove_liquidity_one_coin(shares, i, min_amount)

    bal: uint256 = staticcall IERC20(COINS[i]).balanceOf(<span class="hljs-variable language_">self</span>)
    <span class="hljs-variable language_">self</span>._safe_transfer(COINS[i], msg.sender, bal)
</code></pre>`

export default html
