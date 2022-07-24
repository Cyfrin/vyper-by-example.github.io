// metadata
export const version = "0.3.3"
export const title = "Re-Entrancy Lock"
export const description = "Re-entrancy lock in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant(<span class="hljs-params"><span class="hljs-string">"lock"</span></span>)</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func0</span>():
    <span class="hljs-comment"># call back msg.sender</span>
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant(<span class="hljs-params"><span class="hljs-string">"lock-2"</span></span>)</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func1</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant(<span class="hljs-params"><span class="hljs-string">"lock-2"</span></span>)</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func2</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)
</code></pre>
`

export default html
