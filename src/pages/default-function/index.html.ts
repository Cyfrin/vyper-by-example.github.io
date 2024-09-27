// metadata
export const version = "0.4.0"
export const title = "Default Function"
export const description = "Default function in Vyper"

export const keywords = [
  "default",
  "function",
  "functions",
  "__default__",
  "fallback",
  "payable",
]

const html = `<p>A contract can have a default function, executed when a function that does not exist is called. This is the same function as the fallback function in Solidity.</p>
<p>This function is named <code>__default__</code> and it is commonly used to receive Ether.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

event Payment:
    sender: indexed(address)
    amount: uint256

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    log Payment(msg.sender, msg.value)
</code></pre>`

export default html
