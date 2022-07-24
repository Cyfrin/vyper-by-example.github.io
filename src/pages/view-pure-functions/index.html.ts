// metadata
export const version = "0.3.3"
export const title = "View and Pure Functions"
export const description = "View and pure functions in Vyper"

const html = `<p>Both <code>pure</code> and <code>view</code> functions are read only function, they cannot write anything to the blockchain.</p>
<p><code>pure</code> functions do not read any state or global variables</p>
<p><code>view</code> functions can read state variables, global variables and call internal functions.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

num: public(uint256)

<span class="hljs-comment"># Pure functions does not read any state or global variables</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">pureFunc</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x


<span class="hljs-comment"># View functions might read state or global state, or call an internal function</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">viewFunc</span>(<span class="hljs-params">x: uint256</span>) -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> x &gt; self.num


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">x: uint256, y: uint256, z: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + y + z


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">addNum</span>(<span class="hljs-params">x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x + self.num
</code></pre>
`

export default html
