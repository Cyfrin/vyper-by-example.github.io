// metadata
export const version = "0.4.0"
export const title = "Rebase token"
export const description = "Rebase token in Vyper"

export const keywords = ["rebase", "token", "app"]

const html = `<p>Example of rebase token</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @pragma version ^0.4.0</span>

<span class="hljs-comment"># Rebase token (compound interest rate)</span>

RAY: constant(uint256) = <span class="hljs-number">10</span>**<span class="hljs-number">27</span>
MIN_R: constant(uint256) = <span class="hljs-number">10</span>**<span class="hljs-number">25</span>

authorized: public(HashMap[address, <span class="hljs-built_in">bool</span>])
pie: public(uint256)
slices: public(HashMap[address, uint256])
rate: public(uint256)
acc: public(uint256)
t: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.authorized[msg.sender] = <span class="hljs-literal">True</span>
    <span class="hljs-variable language_">self</span>.rate = RAY
    <span class="hljs-variable language_">self</span>.acc = RAY
    <span class="hljs-variable language_">self</span>.t = block.timestamp

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_rate</span>(<span class="hljs-params">ray: uint256</span>):
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.authorized[msg.sender]
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
    <span class="hljs-variable language_">self</span>.rate = ray

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">r</span>() -&gt; uint256:
    n: uint256 = (block.timestamp - <span class="hljs-variable language_">self</span>.t)
    <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">0</span>:
        rate: uint256 = <span class="hljs-variable language_">self</span>.rate
        <span class="hljs-keyword">if</span> rate &gt; RAY:
            <span class="hljs-comment"># rate = 1 + x</span>
            x: uint256 = rate - RAY
            <span class="hljs-comment"># binomial expansion</span>
            <span class="hljs-comment"># (1+x)^n = 1 + n*x + (n*(n-1)/2*x^2) + (n*(n-1)*(n-2)/(2*3)*x^3) + ...</span>
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - <span class="hljs-number">1</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">1</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">2</span> * x // RAY
            x3: uint256 = x2 * ((n - <span class="hljs-number">2</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">2</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">3</span> * x // RAY
            <span class="hljs-keyword">return</span> RAY + x1 + x2 + x3
        <span class="hljs-keyword">elif</span> rate &lt; RAY:
            <span class="hljs-comment"># rate = 1 - x</span>
            x: uint256 = RAY - rate
            <span class="hljs-comment"># binomial expansion</span>
            <span class="hljs-comment"># (1-x)^n = 1 - n*x + (n*(n-1)/2*x^2) - (n*(n-1)*(n-2)/(2*3)*x^3) + ...</span>
            x1: uint256 = n * x
            x2: uint256 = x1 * ((n - <span class="hljs-number">1</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">1</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">2</span> * x // RAY
            x3: uint256 = x2 * ((n - <span class="hljs-number">2</span>) <span class="hljs-keyword">if</span> n &gt; <span class="hljs-number">2</span> <span class="hljs-keyword">else</span> <span class="hljs-number">0</span>) // <span class="hljs-number">3</span> * x // RAY
            <span class="hljs-comment"># Check underflow and min</span>
            <span class="hljs-comment"># RAY - x1 + x2 - x3 &lt;= MIN_R</span>
            <span class="hljs-keyword">if</span> RAY + x2 &lt; MIN_R + x1 + x3:
                <span class="hljs-keyword">return</span> MIN_R
            <span class="hljs-keyword">return</span> RAY - x1 + x2 - x3
        <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">return</span> RAY
    <span class="hljs-keyword">return</span> RAY

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">a</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.acc * <span class="hljs-variable language_">self</span>.r() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">total_supply</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.pie * <span class="hljs-variable language_">self</span>.a() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">balance_of</span>(<span class="hljs-params">usr: address</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.slices[usr] * <span class="hljs-variable language_">self</span>.a() // RAY

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">poke</span>():
    <span class="hljs-variable language_">self</span>.acc *= <span class="hljs-variable language_">self</span>.r() // RAY
    <span class="hljs-variable language_">self</span>.t = block.timestamp

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mint</span>(<span class="hljs-params">dst: address, amt: uint256</span>):
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.authorized[msg.sender]
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
    a: uint256 = <span class="hljs-variable language_">self</span>.acc
    s: uint256 = amt * RAY // a
    <span class="hljs-keyword">assert</span> s &gt; <span class="hljs-number">0</span>
    <span class="hljs-variable language_">self</span>.slices[dst] += s
    <span class="hljs-variable language_">self</span>.pie += s

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">burn</span>(<span class="hljs-params">amt: uint256</span>):
    <span class="hljs-keyword">if</span> amt == max_value(uint256):
        <span class="hljs-variable language_">self</span>.pie -= <span class="hljs-variable language_">self</span>.slices[msg.sender]
        <span class="hljs-variable language_">self</span>.slices[msg.sender] = <span class="hljs-number">0</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
        a: uint256 = <span class="hljs-variable language_">self</span>.acc
        s: uint256 = amt * RAY // a
        <span class="hljs-keyword">assert</span> s &gt; <span class="hljs-number">0</span>
        <span class="hljs-variable language_">self</span>.pie -= s
        <span class="hljs-variable language_">self</span>.slices[msg.sender] -= s

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">transfer</span>(<span class="hljs-params">dst: address, amt: uint256</span>):
    <span class="hljs-keyword">if</span> amt == max_value(uint256):
        <span class="hljs-variable language_">self</span>.slices[dst] += <span class="hljs-variable language_">self</span>.slices[msg.sender]
        <span class="hljs-variable language_">self</span>.slices[msg.sender] = <span class="hljs-number">0</span>
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.t == block.timestamp
        a: uint256 = <span class="hljs-variable language_">self</span>.acc
        s: uint256 = amt * RAY // a
        <span class="hljs-variable language_">self</span>.slices[msg.sender] -= s
        <span class="hljs-variable language_">self</span>.slices[dst] += s
</code></pre>`

export default html
