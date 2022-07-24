// metadata
export const version = "0.3.3"
export const title = "Event"
export const description = "Event in Vyper"

const html = `<p>Events write logs to the blockchain, commonly used by application to monitor blockchain state and as a cheaper alternative to store data on the blockchain without using state variables.</p>
<p>Events can be efficiently searched by indexing their arguments. Up to 3 parameters can be indexed.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

<span class="hljs-comment"># up to 3 index</span>
event Transfer:
    <span class="hljs-comment"># enables quick search of all Transfer events where sender is a certain address</span>
    sender: indexed(address)
    <span class="hljs-comment"># enables quick search of all Transfer events where receiver is a certain address</span>
    receiver: indexed(address)
    amount: uint256


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">transfer</span>(<span class="hljs-params">receiver: address, amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(msg.sender, receiver, amount)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mint</span>(<span class="hljs-params">amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(ZERO_ADDRESS, msg.sender, amount)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">burn</span>(<span class="hljs-params">amount: uint256</span>):
    <span class="hljs-comment"># some code ...</span>
    log Transfer(msg.sender, ZERO_ADDRESS, amount)
</code></pre>
`

export default html
