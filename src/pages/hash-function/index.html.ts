// metadata
export const version = "0.3.3"
export const title = "Hash Function"
export const description = "Hash function in Vyper"

const html = `<p>Vyper supports the same hash function available in Solidity, <code>keccack256</code>.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getHash</span>(<span class="hljs-params">addr: address, num: uint256, </span>) -&gt; bytes32:
    <span class="hljs-comment"># input of keccak256 can be String, Bytes or bytes32</span>
    <span class="hljs-keyword">return</span> keccak256(
        <span class="hljs-comment"># convert different data into Bytes</span>
        concat(
            convert(addr, bytes32),
            convert(num, bytes32),
            convert(<span class="hljs-string">"THIS IS A STRING"</span>, Bytes[<span class="hljs-number">16</span>])
        )
    )


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getMessageHash</span>(<span class="hljs-params">_<span class="hljs-built_in">str</span>: String[<span class="hljs-number">100</span>]</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(_<span class="hljs-built_in">str</span>)
</code></pre>
`

export default html
