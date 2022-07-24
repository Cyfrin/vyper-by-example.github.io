// metadata
export const version = "0.3.3"
export const title = "Default Function"
export const description = "Default function in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


event Payment:
    sender: indexed(address)
    amount: uint256


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    log Payment(msg.sender, msg.value)
</code></pre>
`

export default html
