// metadata
export const version = "0.3.7"
export const title = "Curve Swap"
export const description = "Curve Swap"

const html = `<p>Swap tokens on Curve</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.7</span>

<span class="hljs-keyword">from</span> vyper.interfaces <span class="hljs-keyword">import</span> ERC20


interface IStableSwap:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">exchange</span>(<span class="hljs-params">i: int128, j: int128, dx: uint256, min_dy: uint256</span>): nonpayable


DAI: constant(address) = <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>
USDC: constant(address) = <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>
USDT: constant(address) = <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>

POOL: constant(address) = <span class="hljs-number">0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7</span>
COINS: constant(address[<span class="hljs-number">3</span>]) = [DAI, USDC, USDT]


<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safeTransfer</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
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
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safeTransferFrom</span>(<span class="hljs-params">coin: address, _<span class="hljs-keyword">from</span>: address, to: address, amount: uint256</span>):
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
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_safeApprove</span>(<span class="hljs-params">coin: address, to: address, amount: uint256</span>):
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
<span class="hljs-keyword">def</span> <span class="hljs-title function_">swap</span>(<span class="hljs-params">i: int128, j: int128, dx: uint256, min_dy: uint256</span>):
    self._safeTransferFrom(COINS[i], msg.sender, self, dx)
    self._safeApprove(COINS[i], POOL, dx)

    IStableSwap(POOL).exchange(i, j, dx, min_dy)

    bal: uint256 = ERC20(COINS[j]).balanceOf(self)
    self._safeTransfer(COINS[j], msg.sender, bal)
</code></pre>
`

export default html
