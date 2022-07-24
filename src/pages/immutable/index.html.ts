// metadata
export const version = "0.3.3"
export const title = "Immutable"
export const description = "Immutable in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

OWNER: immutable(address)
MY_IMMUTABLE: immutable(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">_val: uint256</span>):
    OWNER = msg.sender
    MY_IMMUTABLE = _val


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getMyImmutable</span>() -&gt; uint256:
  <span class="hljs-keyword">return</span> MY_IMMUTABLE
</code></pre>
`

export default html
