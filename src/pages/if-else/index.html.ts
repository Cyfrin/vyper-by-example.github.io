// metadata
export const version = "0.4.0"
export const title = "If Else Conditional Statement"
export const description = "If else conditional statement in Vyper"

export const keywords = ["if", "else", "conditional", "statement"]

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">if_else</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">if</span> x &lt;= <span class="hljs-number">10</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>
    <span class="hljs-keyword">elif</span> x &lt;= <span class="hljs-number">20</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">abs_value</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">if</span> x &gt;= y:
        <span class="hljs-keyword">return</span> x - y
    <span class="hljs-keyword">return</span> y - x
</code></pre>`

export default html
