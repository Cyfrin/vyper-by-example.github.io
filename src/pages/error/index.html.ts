// metadata
export const version = "0.3.3"
export const title = "Error"
export const description = "Error in Vyper"

const html = `<p>Use <code>assert</code> and <code>raise</code> to check inputs and validate state.</p>
<p>When an error occurs, it will halt the entire function call, undoing any changes.</p>
<p>You will still need to pay gas for the failed transaction.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

x: public(uint256)
owner: public(address)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    self.owner = msg.sender


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">testAssert</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-comment"># self.x will not be updated if there is an error from line above</span>
    self.x = x


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">testRaise</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-comment"># same check as above using "raise"</span>
    <span class="hljs-keyword">if</span> x &lt;= <span class="hljs-number">1</span>:
        <span class="hljs-keyword">raise</span> <span class="hljs-string">"x &lt; 1"</span>
    self.x = x


<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_testErrorBubblesUp</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    self.x = x


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">testErrorBubblesUp</span>(<span class="hljs-params">x: uint256</span>):
    self._testErrorBubblesUp(x)
    <span class="hljs-comment"># self.x = 123 will not be executed if there is an error</span>
    <span class="hljs-comment"># from function above</span>
    self.x = <span class="hljs-number">123</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-keyword">assert</span> msg.sender == self.owner, <span class="hljs-string">"!owner"</span>
    <span class="hljs-keyword">assert</span> owner != ZERO_ADDRESS, <span class="hljs-string">"owner = zero"</span>
    self.owner = owner
</code></pre>
`

export default html
