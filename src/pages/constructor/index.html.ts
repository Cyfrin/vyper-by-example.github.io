// metadata
export const version = "0.4.0"
export const title = "Constructor"
export const description = "Constructor in Vyper"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/constructor-vyper-code-example"

export const keywords = ["constructor"]

const html = `<p><code>__init__</code> is a special function that is executed only once when the contract is deployed.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

owner: public(address)
name: public(String[<span class="hljs-number">10</span>])
createdAt: public(uint256)
expiresAt: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">name: String[<span class="hljs-number">10</span>], duration: uint256</span>):
    <span class="hljs-comment"># set owner to caller</span>
    <span class="hljs-variable language_">self</span>.owner = msg.sender
    <span class="hljs-comment"># set name from input</span>
    <span class="hljs-variable language_">self</span>.name = name
    <span class="hljs-variable language_">self</span>.createdAt = block.timestamp
    <span class="hljs-variable language_">self</span>.expiresAt = block.timestamp + duration
</code></pre>`

export default html
