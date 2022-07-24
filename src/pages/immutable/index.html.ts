// metadata
export const version = "0.3.3"
export const title = "Immutable"
export const description = "Immutable in Vyper"

const html = `<p>Immutable variables are like constants except value are assigned when the contract is deployed.</p>
<h3 id="when-to-use-immutable-variables">When to use <code>immutable</code> variables?</h3>
<ul>
<li>You have a variable that needs to be set when the contract is deployed,
for example like setting contract owner to <code>msg.sender</code></li>
<li>and this variable will never change after deployment</li>
</ul>
<h4 id="why-declare-variables-as-immutable">Why declare variables as <code>immutable</code>?</h4>
<p>Like constants, <code>immutable</code> variables save run time gas</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

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
