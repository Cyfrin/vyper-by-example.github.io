// metadata
export const version = "0.4.0"
export const title = "Immutable"
export const description = "Immutable in Vyper"
export const cyfrinLink = "https://www.cyfrin.io/glossary/immutable-vyper-code-example"

export const keywords = ["immutable", "immutables", "constant", "constants"]

const html = `<p>Immutable variables are like constants except value are assigned when the contract is deployed.</p>
<h3>When to use <code>immutable</code> variables?</h3>
<ul>
<li>You have a variable that needs to be set when the contract is deployed,
for example like setting contract owner to <code>msg.sender</code></li>
<li>and this variable will never change after deployment</li>
</ul>
<h4>Why declare variables as <code>immutable</code>?</h4>
<p>Like constants, <code>immutable</code> variables save run time gas</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

OWNER: public(immutable(address))
MY_IMMUTABLE: public(immutable(uint256))

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">val: uint256</span>):
    OWNER = msg.sender
    MY_IMMUTABLE = val


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_my_immutable</span>() -&gt; uint256:
  <span class="hljs-keyword">return</span> MY_IMMUTABLE
</code></pre>`

export default html
