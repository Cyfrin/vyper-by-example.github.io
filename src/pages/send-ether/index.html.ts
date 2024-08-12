// metadata
export const version = "0.4.0"
export const title = "Send Ether"
export const description = "Send ETH in Vyper"

export const keywords = ["send", "ether", "raw_call", "payable"]

const html = `<p>There are two ways to send Ether from a contract, <code>send</code> and <code>raw_call</code>. Here we introduce the simpler function to use, <code>send</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @pragma version ^0.4.0</span>

<span class="hljs-comment"># Receive Ether into this contract</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_eth</span>(<span class="hljs-params">to: address, amount: uint256</span>):
    <span class="hljs-comment"># when Ether is sent to a contract it will call </span>
    <span class="hljs-comment"># __default__ inside the receiving contract</span>
    <span class="hljs-comment"># forwards 2300 gas</span>
    send(to, amount)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_all</span>(<span class="hljs-params">to: address</span>):
    send(to, <span class="hljs-variable language_">self</span>.balance)
</code></pre>`

export default html
