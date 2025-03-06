// metadata
export const version = "0.4.0"
export const title = "Self Destruct"
export const description = "Self destruct in Vyper"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/self-destruct-vyper-code-example"

export const keywords = ["selfdestruct", "self", "destruct"]

const html = `<p><code>selfdestruct</code> deletes the contract from the blockchain. It takes a single input, an address to send all of Ether stored in the contract.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
    selfdestruct(msg.sender)
</code></pre>`

export default html
