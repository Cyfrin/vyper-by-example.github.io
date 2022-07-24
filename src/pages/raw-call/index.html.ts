// metadata
export const version = "0.3.3"
export const title = "Raw Call"
export const description = "Raw call in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">testRawCall</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to, <span class="hljs-comment"># address to call</span>
        <span class="hljs-comment"># data to send in Bytes</span>
        concat(
            method_id(<span class="hljs-string">"testAdd(uint256,uint256)"</span>), <span class="hljs-comment"># function to call</span>
            convert(x, bytes32), <span class="hljs-comment"># first input</span>
            convert(y, bytes32), <span class="hljs-comment"># secode input</span>
        ),
        max_outsize=<span class="hljs-number">32</span>, <span class="hljs-comment"># max size of ouput, default 0</span>
        gas=<span class="hljs-number">100000</span>, <span class="hljs-comment"># optional, amount of gas to send, default forwards all gas</span>
        value=<span class="hljs-number">0</span>, <span class="hljs-comment"># optional, amount of ETH to send, default 0</span>
    )

    z: uint256 = convert(res, uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sendEth</span>(<span class="hljs-params">to: address</span>):
    <span class="hljs-comment"># Example to send ETH</span>
    <span class="hljs-comment"># data = b"", empty data</span>
    <span class="hljs-comment"># value = msg.value, all of ETH that was sent to this function</span>
    raw_call(to, <span class="hljs-string">b""</span>, value=msg.value)


diff: public(uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">testRawCallSub</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"testSub(uint256,uint256)"</span>),
            convert(x, bytes32),
            convert(y, bytes32)
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )

    self.diff = convert(res, uint256)
</code></pre>
`

export default html
