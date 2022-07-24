// metadata
export const version = "0.3.3"
export const title = "Function"
export const description = "Function in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">multiply</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * y


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">divide</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x / y


<span class="hljs-comment"># A funciton that does nothing</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">doNothing</span>():
    <span class="hljs-comment"># pass is useful when you want to compile the contract now,</span>
    <span class="hljs-comment"># write the code later</span>
    <span class="hljs-keyword">pass</span>


<span class="hljs-comment"># Functions can return multiple outputs</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">multiOut</span>() -&gt; (uint256, <span class="hljs-built_in">bool</span>):
    <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">True</span>)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">addAndSub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; (uint256, uint256):
    <span class="hljs-keyword">return</span> (x + y, x - y)
</code></pre>
`

export default html
