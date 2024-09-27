// metadata
export const version = "0.4.0"
export const title = "Verify Signature"
export const description = "Verify signature in Vyper"

export const keywords = ["verify", "signature", "ecrecover"]

const html = `<p>Signing and verifying signature takes 3 steps.</p>
<ol>
<li>Hash the data to sign. This can be done with and without a smart contract.</li>
<li>Sign the hash. This must be done off chain.</li>
<li>Verify the signature. This is done using a smart contract.</li>
</ol>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># hash = get_hash("Hello Vyper!")</span>
<span class="hljs-comment"># 0x5436c86f18e3d25a10e557ae125450118dd0a481ca22112b1977d55a676e4c91</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_hash</span>(<span class="hljs-params"><span class="hljs-built_in">str</span>: String[<span class="hljs-number">100</span>]</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(<span class="hljs-built_in">str</span>)

<span class="hljs-comment"># get_eth_signed_hash(hash)</span>
<span class="hljs-comment"># 0x045b623a8e8fb7b4fcfbd1ae07e7326d55303d7de4085c69b346bd130c1936da</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_eth_signed_hash</span>(<span class="hljs-params"><span class="hljs-built_in">hash</span>: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            <span class="hljs-built_in">hash</span>
        )
    )

<span class="hljs-comment"># account = your account</span>
<span class="hljs-comment"># hash = get_hash("Hello Vyper!")</span>
<span class="hljs-comment"># signature = await ethereum.request({ method: "personal_sign", params: [account, hash]})</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">recover_signer</span>(<span class="hljs-params">eth_signed_hash: bytes32, sig: Bytes[<span class="hljs-number">65</span>]</span>) -&gt; address:
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    <span class="hljs-keyword">return</span> ecrecover(eth_signed_hash, v, r, s)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], <span class="hljs-built_in">str</span>: String[<span class="hljs-number">100</span>], _signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-built_in">hash</span>: bytes32 = keccak256(<span class="hljs-built_in">str</span>)
    eth_signed_hash: bytes32 = keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            <span class="hljs-built_in">hash</span>
        )
    )
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    signer: address = ecrecover(eth_signed_hash, v, r, s)

    <span class="hljs-keyword">return</span> _signer == signer
</code></pre>`

export default html
