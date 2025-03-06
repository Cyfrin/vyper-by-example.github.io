// metadata
export const version = "0.4.0"
export const title = "Verify Signature"
export const description = "Verify signature in Vyper"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/verify-signature-vyper-code-example"

export const keywords = ["verify", "signature", "ecrecover"]

const html = `<p>Signing and verifying signature takes 3 steps.</p>
<ol>
<li>Hash the data to sign. This can be done with and without a smart contract.</li>
<li>Sign the hash. This must be done off chain.</li>
<li>Verify the signature. This is done using a smart contract.</li>
</ol>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># 1. Hash data to sign</span>
<span class="hljs-comment"># 2. Sign data offchain</span>
<span class="hljs-comment"># 3. Verify signature onchain</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_hash</span>(<span class="hljs-params">msg_str: String[<span class="hljs-number">100</span>]</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(msg_str)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_eth_hash</span>(<span class="hljs-params">msg_hash: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            msg_hash
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">recover_signer</span>(<span class="hljs-params">eth_signed_hash: bytes32, sig: Bytes[<span class="hljs-number">65</span>]</span>) -&gt; address:
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    <span class="hljs-keyword">return</span> ecrecover(eth_signed_hash, v, r, s)

<span class="hljs-comment"># Elliptic Curve Digital Signature Algorithm (ECDSA)</span>
<span class="hljs-comment"># accounts = await ethereum.request({ method: "eth_requestAccounts" })</span>
<span class="hljs-comment"># account = accounts[0]</span>
<span class="hljs-comment"># h = get_hash("vyper")</span>
<span class="hljs-comment"># signature = await ethereum.request({ method: "personal_sign", params: [account, h]})</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], msg_str: String[<span class="hljs-number">100</span>], signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    h: bytes32 = keccak256(msg_str)
    eth_hash: bytes32 = keccak256(
        concat(<span class="hljs-string">b"\\x19Ethereum Signed Message:\\n32"</span>, h)
    )
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    recovered_addr: address = ecrecover(eth_hash, v, r, s)
    <span class="hljs-keyword">return</span> recovered_addr == signer

</code></pre>`

export default html
