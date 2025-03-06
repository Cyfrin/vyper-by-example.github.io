// metadata
export const version = "0.4.0"
export const title = "Debug with Print"
export const description = "Debug with Print"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/debug-with-print-vyper-code-example"

export const keywords = ["debug", "print"]

const html = `<p>Use the built-in function <code>print</code> to debug smart contracts.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_print</span>():
    x: uint256 = <span class="hljs-number">123</span>
    <span class="hljs-comment"># Set hardhat_compat = True when testing with Hardhat</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">"print something here"</span>, x, hardhat_compat=<span class="hljs-literal">True</span>)
</code></pre>`

export default html
