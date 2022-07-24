// metadata
export const version = "0.3.3"
export const title = "Internal and External Functions"
export const description = "Internal and external functions in Vyper"

const html = `<p><code>@internal</code> functions can only be called inside the contract.</p>
<p><code>@external</code> functions can only be called from outside the contract.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

<span class="hljs-comment"># Internal functions can only be called inside this contract</span>
<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + y


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">extFunc</span>() -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> <span class="hljs-literal">True</span>


<span class="hljs-comment"># External functions can only be called from outside this contract</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">avg</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-comment"># cannot call other external function</span>
    <span class="hljs-comment"># self.extFunc()</span>

    <span class="hljs-comment"># can call internal functions</span>
    z: uint256 = self._add(x, y)

    <span class="hljs-keyword">return</span> (x + y) / <span class="hljs-number">2</span>


<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sqr</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * x


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sumOfSquares</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> self._sqr(x) + self._sqr(y)
</code></pre>
`

export default html
