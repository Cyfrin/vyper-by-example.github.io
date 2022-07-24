// metadata
export const version = "0.3.3"
export const title = "Delegate Call"
export const description = "Delegate call in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


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
