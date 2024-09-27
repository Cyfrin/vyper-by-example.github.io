// metadata
export const version = "0.4.0"
export const title = "Raw Call"
export const description = "Raw call in Vyper"

export const keywords = ["raw", "call", "raw_call"]

const html = `<p><code>raw_call</code> is a low level function. It is used to call and send Ether to other functions.</p>
<p>For this example, we will write a contract that calls this contract below.</p>
<p>TestRawCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>


sender: public(address)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_add</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.sender = msg.sender
    <span class="hljs-keyword">return</span> x + y

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_sub</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.sender = msg.sender
    <span class="hljs-keyword">return</span> x - y
</code></pre><p>RawCall.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raw_call</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to, <span class="hljs-comment"># address to call</span>
        <span class="hljs-comment"># data to send in Bytes</span>
        concat(
            method_id(<span class="hljs-string">"test_add(uint256,uint256)"</span>), <span class="hljs-comment"># function to call</span>
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
<span class="hljs-keyword">def</span> <span class="hljs-title function_">send_eth</span>(<span class="hljs-params">to: address</span>):
    <span class="hljs-comment"># Example to send ETH</span>
    <span class="hljs-comment"># data = b"", empty data</span>
    <span class="hljs-comment"># value = msg.value, all of ETH that was sent to this function</span>
    raw_call(to, <span class="hljs-string">b""</span>, value=msg.value)

diff: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_raw_call_sub</span>(<span class="hljs-params">to: address, x: uint256, y: uint256</span>):
    res: Bytes[<span class="hljs-number">32</span>] = raw_call(
        to,
        concat(
            method_id(<span class="hljs-string">"test_sub(uint256,uint256)"</span>),
            convert(x, bytes32),
            convert(y, bytes32)
        ),
        max_outsize=<span class="hljs-number">32</span>,
    )

    <span class="hljs-variable language_">self</span>.diff = convert(res, uint256)
</code></pre>`

export default html
