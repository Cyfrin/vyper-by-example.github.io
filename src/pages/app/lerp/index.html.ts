// metadata
export const version = "0.4.0"
export const title = "Linear interpolation"
export const description = "Lerp"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/linear-interpolation-vyper-code-example"

export const keywords = ["lerp", "math", "app"]

const html = `<p>Example of linear interpolation (lerp).</p>
<p>Value changes linearly from <code>y0</code> to <code>y1</code> over the time span of <code>t0</code> to <code>t1</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment">#pragma version 0.4.0</span>

y0: public(uint256)
y1: public(uint256)
t0: public(uint256)
t1: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.y0 = <span class="hljs-number">10</span>
    <span class="hljs-variable language_">self</span>.y1 = <span class="hljs-number">20</span>
    <span class="hljs-variable language_">self</span>.t0 = block.timestamp + <span class="hljs-number">30</span>
    <span class="hljs-variable language_">self</span>.t1 = block.timestamp + <span class="hljs-number">60</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">lerp</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._lerp(<span class="hljs-variable language_">self</span>.y0, <span class="hljs-variable language_">self</span>.y1, <span class="hljs-variable language_">self</span>.t0, <span class="hljs-variable language_">self</span>.t1, block.timestamp)

<span class="hljs-meta">@internal</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_lerp</span>(<span class="hljs-params">y0: uint256, y1: uint256, x0: uint256, x1: uint256, x: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">assert</span> x0 &lt; x1

    <span class="hljs-keyword">if</span> x &lt;= x0:
        <span class="hljs-keyword">return</span> y0

    <span class="hljs-keyword">if</span> x &gt;= x1:
        <span class="hljs-keyword">return</span> y1

    <span class="hljs-comment"># w(x) = (x - x0) / (x1 - x0)</span>
    <span class="hljs-comment"># f(x) = y0*(1 - w(x)) + y1*w(x)</span>
    <span class="hljs-comment">#      = (y0*((x1 - x0) - (x - x0)) + y1*(x - x0)) / (x1 - x0)</span>
    x1_x: uint256 = x1 - x
    x_x0: uint256 = x - x0
    x1_x0: uint256 = x1 - x0

    <span class="hljs-keyword">return</span> (y0*x1_x + y1*x_x0) // x1_x0

</code></pre>`

export default html
