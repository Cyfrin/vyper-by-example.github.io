// metadata
export const version = "0.3.3"
export const title = "Self Destruct"
export const description = "Self destruct in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
    selfdestruct(msg.sender)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">burn</span>():
    selfdestruct(ZERO_ADDRESS)
</code></pre>
`

export default html
