// metadata
export const version = "0.4.0"
export const title = "Re-Entrancy Lock"
export const description = "Re-entrancy lock in Vyper"

export const keywords = ["re-entrancy", "lock", "nonreentrant"]

const html = `<p>Vyper has a handy way to secure your contract from re-entrancy.</p>
<p>A re-entrancy lock can be created on a function with <code>@nonreentrant</code>.</p>
<p>Functions can be locked together by using the same name for the locks.</p>
<p>Contract with re-entrancy lock</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@nonreentrant</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)

</code></pre><p>Contract without re-entrancy lock</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>():
    raw_call(msg.sender, <span class="hljs-string">b""</span>, value=<span class="hljs-number">0</span>)

</code></pre><p>Contract to test re-entrancy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

interface ILock:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">func</span>(): nonpayable

count: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">if</span> <span class="hljs-variable language_">self</span>.count &lt; <span class="hljs-number">2</span>:
        <span class="hljs-variable language_">self</span>.count += <span class="hljs-number">1</span>
        extcall ILock(msg.sender).func()

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">reset</span>():
    <span class="hljs-variable language_">self</span>.count = <span class="hljs-number">0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_lock</span>(<span class="hljs-params">to: address</span>):
    extcall ILock(to).func()

</code></pre>`

export default html
