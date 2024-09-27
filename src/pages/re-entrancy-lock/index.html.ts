// metadata
export const version = "0.4.0"
export const title = "Re-Entrancy Lock"
export const description = "Re-entrancy lock in Vyper"

export const keywords = ["re-entrancy", "lock", "nonreentrant"]

const html = `<p>Vyper has a handy way to secure your contract from re-entrancy.</p>
<p>A re-entrancy lock can be created on a function with <code>@nonreentrant("lock")</code>.</p>
<p>Functions can be locked together by using the same name for the locks.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>():
    <span class="hljs-comment"># call back msg.sender</span>
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)

</code></pre>`

export default html
