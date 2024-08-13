// metadata
export const version = "0.4.0"
export const title = "What's New"
export const description = "What's new in Vyper 0.4"

export const keywords = [
    "vyper",
    "0.4",
]

const html = `<h3>pragma version</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.0</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version ^0.4.0</span>
</code></pre><h3>Optimization mode</h3>
<p><code>codesize</code>, <code>gas</code> (default), or <code>none</code></p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version ^0.4.0 optimize codesize</span>
</code></pre><h3>Constructor</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre><h3>For loop</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-keyword">for</span> addr <span class="hljs-keyword">in</span> addrs:
    ...
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-keyword">for</span> addr: address <span class="hljs-keyword">in</span> addrs:
    ...
</code></pre><h3>Division</h3>
<p>0.3</p>
<pre><code class="language-shell">x / y
</code></pre><p>0.4</p>
<pre><code class="language-shell">x // y
</code></pre><h3>Constants</h3>
<p>0.3</p>
<pre><code class="language-vyper">ZERO_ADDRESS
MAX_UINT256
EMPTY_BYTES32
</code></pre><p>0.4</p>
<pre><code class="language-vyper">empty(address)
max_value(uint256)
empty(bytes32)
</code></pre><h3>Interface</h3>
<pre><code class="language-vyper">static IFoo(addr).bar()
extcall IFoo(addr).bar()
</code></pre><h3>Re-entrancy locks</h3>
<p>0.3</p>
<pre><code class="language-vyper"><span class="hljs-meta">@nonreentrant(<span class="hljs-params"><span class="hljs-string">"lock"</span></span>)</span>
</code></pre><p>0.4</p>
<pre><code class="language-vyper"><span class="hljs-meta">@nonreentrant</span>
</code></pre>`

export default html