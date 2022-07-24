// metadata
export const version = "0.3.3"
export const title = "Delegate Call"
export const description = "Delegate call in Vyper"

const html = `<p>When contract <code>A</code> delegates call to contract <code>B</code>, <code>B</code>&#39;s code will be executed inside contract <code>A</code>. This will update state variables and Ether balance inside contract <code>A</code> and not <code>B</code>.</p>
<p>Delegate call is commonly used to create an upgradable contract.</p>
<p>Here is the contract that we will delegate call to.</p>
<p>TestDelegateCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

<span class="hljs-comment"># State variables must be declared in the same order</span>
<span class="hljs-comment"># as contract making the call</span>
x: public(uint256)
y: public(uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">updateX</span>(<span class="hljs-params">x: uint256</span>):
    <span class="hljs-comment"># when this function is called with delegate call</span>
    <span class="hljs-comment"># this will update self.x inside the calling contract</span>
    self.x = x + <span class="hljs-number">1</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">updateY</span>(<span class="hljs-params">y: uint256</span>):
    self.y = y * y
</code></pre>
<p>DelegateCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


x: public(uint256)
y: public(uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">updateX</span>(<span class="hljs-params">to: address, x: uint256</span>):
    raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"updateX(uint256)"</span>),
            convert(x, bytes32)
        ),
        is_delegate_call=<span class="hljs-literal">True</span>
    )


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">updateY</span>(<span class="hljs-params">to: address, y: uint256</span>):
    raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"updateY(uint256)"</span>),
            convert(y, bytes32)
        ),
        is_delegate_call=<span class="hljs-literal">True</span>
    )
</code></pre>
`

export default html
