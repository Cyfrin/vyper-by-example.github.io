// metadata
export const version = "0.3.3"
export const title = "Constants"
export const description = "Constants in Vyper"

const html = `<p>Constants are variables that cannot change.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

MY_CONSTANT: constant(uint256) = <span class="hljs-number">123</span>
MIN: constant(uint256) = <span class="hljs-number">1</span>
MAX: constant(uint256) = <span class="hljs-number">10</span>
ADDR: constant(address) = <span class="hljs-number">0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getBuiltInConstants</span>() -&gt; (address, uint256, bytes32):
    <span class="hljs-comment"># Commonly used constants availabe in Vyper</span>
    <span class="hljs-keyword">return</span> (ZERO_ADDRESS, MAX_UINT256, EMPTY_BYTES32)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getMyConstants</span>() -&gt; (uint256, uint256, address):
    <span class="hljs-keyword">return</span> (MIN, MAX, ADDR)
</code></pre>
`

export default html
