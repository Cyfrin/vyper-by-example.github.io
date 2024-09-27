// metadata
export const version = "0.4.0"
export const title = "Error"
export const description = "Error in Vyper"

export const keywords = ["error", "errors"]

const html = `<p>Use <code>assert</code> and <code>raise</code> to check inputs and validate state.</p>
<p>When an error occurs, it will halt the entire function call, undoing any changes.</p>
<p>You will still need to pay gas for the failed transaction.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

x: public(uint256)
owner: public(address)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_assert</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-comment"># self.x will not be updated if there is an error from line above</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raise</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-comment"># same check as above using "raise"</span>
    <span class="hljs-keyword">if</span> x &lt;= <span class="hljs-number">1</span>:
        <span class="hljs-keyword">raise</span> <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_test_error_bubbles_up</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-keyword">assert</span> x &gt;= <span class="hljs-number">1</span>, <span class="hljs-string">"x &lt; 1"</span>
    <span class="hljs-variable language_">self</span>.x = x

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_error_bubbles_up</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-variable language_">self</span>._test_error_bubbles_up(x)
    <span class="hljs-comment"># self.x = 123 will not be executed if there is an error</span>
    <span class="hljs-comment"># from function above</span>
    <span class="hljs-variable language_">self</span>.x = <span class="hljs-number">123</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>.owner, <span class="hljs-string">"!owner"</span>
    <span class="hljs-keyword">assert</span> owner != empty(address), <span class="hljs-string">"owner = zero"</span>
    <span class="hljs-variable language_">self</span>.owner = owner
</code></pre>`

export default html
