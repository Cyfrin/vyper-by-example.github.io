// metadata
export const version = "0.3.3"
export const title = "Payable"
export const description = "Payable in Vyper"

const html = `<p>Functions declared with <code>@payable</code> can receive Ether.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


event Deposit:
    sender: indexed(address)
    amount: uint256


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deposit</span>():
    log Deposit(msg.sender, msg.value)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getBalance</span>() -&gt; uint256:
    <span class="hljs-comment"># Get balance of Ether stored in this contract</span>
    <span class="hljs-keyword">return</span> self.balance


owner: public(address)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">pay</span>():
    <span class="hljs-keyword">assert</span> msg.value &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"msg.value = 0"</span>
    self.owner = msg.sender
</code></pre>
`

export default html
