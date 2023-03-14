// metadata
export const version = "0.3.7"
export const title = "Unsafe Math"
export const description = "Unsafe math in Vyper"

const html = `<p>Critical math checks such as overflow, underflow and division by 0 can be skipped useing unsafe functions</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.7</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21510 gas</span>
    <span class="hljs-comment"># return x + y</span>

    <span class="hljs-comment"># 21472 gas</span>
    <span class="hljs-keyword">return</span> unsafe_add(x, y)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_sub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21533 gas</span>
    <span class="hljs-comment"># return x - y</span>

    <span class="hljs-comment"># 21495 gas</span>
    <span class="hljs-keyword">return</span> unsafe_sub(x, y)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21578 gas</span>
    <span class="hljs-comment"># return x * y</span>

    <span class="hljs-comment"># 21520 gas</span>
    <span class="hljs-keyword">return</span> unsafe_mul(x, y)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_div</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># 21578 gas</span>
    <span class="hljs-comment"># return x / y</span>

    <span class="hljs-comment"># 21543 gas</span>
    <span class="hljs-keyword">return</span> unsafe_div(x, y)
</code></pre>
`

export default html
