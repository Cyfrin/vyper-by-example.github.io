// metadata
export const version = "0.3.3"
export const title = "Constructor"
export const description = "Constructor in Vyper"

const html = `<p><code>__init__</code> is a special function that is executed only once when the contract is deployed.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

owner: public(address)
name: public(String[<span class="hljs-number">10</span>])
createdAt: public(uint256)
expiresAt: public(uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">name: String[<span class="hljs-number">10</span>], duration: uint256</span>):
    <span class="hljs-comment"># set owner to caller</span>
    self.owner = msg.sender
    <span class="hljs-comment"># set name from input</span>
    self.name = name
    self.createdAt = block.timestamp
    self.expiresAt = block.timestamp + duration
</code></pre>
`

export default html
