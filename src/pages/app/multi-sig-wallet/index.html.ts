// metadata
export const version = "0.4.0"
export const title = "Multi Sig Wallet"
export const description = "multi sig wallet"

export const keywords = ["app", "multi", "sig", "wallet"]

const html = `<p>Example of a multi sig wallet</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

MAX_TX_DATA_SIZE: constant(uint256) = <span class="hljs-number">1000</span>

<span class="hljs-comment"># Max owners</span>
M: public(constant(uint256)) = <span class="hljs-number">5</span>
<span class="hljs-comment"># Number of signatures required</span>
k: public(uint256)
<span class="hljs-comment"># Mapping storing address of owners</span>
auth: public(HashMap[address, <span class="hljs-built_in">bool</span>])
owners: public(DynArray[address, M])
<span class="hljs-comment"># Nonce used to invalidate executed transaction</span>
nonce: public(uint256)

event Execute:
    tx_id: indexed(bytes32)
    to: indexed(address)
    data: Bytes[MAX_TX_DATA_SIZE]
    val: uint256
    nonce: uint256

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">k: uint256, owners: DynArray[address, M]</span>):
    n: uint256 = <span class="hljs-built_in">len</span>(owners)

    <span class="hljs-keyword">assert</span> <span class="hljs-number">0</span> &lt; n, <span class="hljs-string">"n = 0"</span>
    <span class="hljs-keyword">assert</span> n &lt;= M, <span class="hljs-string">"n &gt; max"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-number">0</span> &lt; k, <span class="hljs-string">"k = 0"</span>
    <span class="hljs-keyword">assert</span> k &lt;= n, <span class="hljs-string">"k &gt; n"</span>

    <span class="hljs-variable language_">self</span>.k = k

    <span class="hljs-keyword">for</span> owner: address <span class="hljs-keyword">in</span> owners:
        <span class="hljs-keyword">assert</span> owner != empty(address), <span class="hljs-string">"owner = 0 address"</span>
        <span class="hljs-keyword">assert</span> <span class="hljs-keyword">not</span> <span class="hljs-variable language_">self</span>.auth[owner], <span class="hljs-string">"duplicate owner"</span>
        <span class="hljs-variable language_">self</span>.auth[owner] = <span class="hljs-literal">True</span>

    <span class="hljs-variable language_">self</span>.owners = owners

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__default__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_auth</span>():
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.auth[msg.sender], <span class="hljs-string">"not authorized"</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_self</span>():
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>, <span class="hljs-string">"not authorized"</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set</span>(<span class="hljs-params">k: uint256</span>):
    <span class="hljs-variable language_">self</span>._check_self()
    <span class="hljs-keyword">assert</span> k &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"k = 0"</span>
    <span class="hljs-keyword">assert</span> k &lt;= <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners), <span class="hljs-string">"k &gt; n"</span>
    <span class="hljs-variable language_">self</span>.k = k

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">add</span>(<span class="hljs-params">addr: address</span>):
    <span class="hljs-variable language_">self</span>._check_self()
    <span class="hljs-keyword">assert</span> addr != empty(address), <span class="hljs-string">"0 address"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-keyword">not</span> <span class="hljs-variable language_">self</span>.auth[addr], <span class="hljs-string">"already owner"</span>

    <span class="hljs-variable language_">self</span>.owners.append(addr)
    <span class="hljs-variable language_">self</span>.auth[addr] = <span class="hljs-literal">True</span>

    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners) &lt;= M, <span class="hljs-string">"n &gt; max"</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">remove</span>(<span class="hljs-params">i: uint256</span>):
    <span class="hljs-variable language_">self</span>._check_self()

    addr: address = <span class="hljs-variable language_">self</span>.owners[i]
    last: address = <span class="hljs-variable language_">self</span>.owners.pop()
    <span class="hljs-keyword">if</span> addr != last:
        <span class="hljs-variable language_">self</span>.owners[i] = last

    <span class="hljs-variable language_">self</span>.auth[addr] = <span class="hljs-literal">False</span>

    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(<span class="hljs-variable language_">self</span>.owners) &gt;= <span class="hljs-variable language_">self</span>.k, <span class="hljs-string">"n &lt; k"</span>

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_get_tx_id</span>(<span class="hljs-params">
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    nonce: uint256
</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            convert(chain.<span class="hljs-built_in">id</span>, bytes32),
            convert(<span class="hljs-variable language_">self</span>, bytes32),
            convert(to, bytes32),
            data,
            convert(val, bytes32),
            convert(nonce, bytes32),
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_tx_id</span>(<span class="hljs-params">to: address, data: Bytes[MAX_TX_DATA_SIZE], val: uint256, nonce: uint256</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._get_tx_id(to, data, val, nonce)

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_get_eth_hash</span>(<span class="hljs-params">tx_id: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> keccak256(
        concat(
            <span class="hljs-string">b&#x27;\\x19Ethereum Signed Message:\\n32&#x27;</span>,
            tx_id
        )
    )

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_eth_hash</span>(<span class="hljs-params">tx_id: bytes32</span>) -&gt; bytes32:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._get_eth_hash(tx_id)

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], eth_hash: bytes32, signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    r: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">0</span>, <span class="hljs-number">32</span>), uint256)
    s: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">32</span>, <span class="hljs-number">32</span>), uint256)
    v: uint256 = convert(<span class="hljs-built_in">slice</span>(sig, <span class="hljs-number">64</span>, <span class="hljs-number">1</span>), uint256)
    <span class="hljs-keyword">return</span> ecrecover(eth_hash, v, r, s) == signer

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">verify</span>(<span class="hljs-params">sig: Bytes[<span class="hljs-number">65</span>], eth_hash: bytes32, signer: address</span>) -&gt; <span class="hljs-built_in">bool</span>:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>._verify(sig, eth_hash, signer)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-meta">@nonreentrant</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">exec</span>(<span class="hljs-params">
    to: address,
    data: Bytes[MAX_TX_DATA_SIZE],
    val: uint256,
    signers: DynArray[address, M],
    sigs: DynArray[Bytes[<span class="hljs-number">65</span>], M]
</span>):
    <span class="hljs-variable language_">self</span>._check_auth()
    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(signers) == <span class="hljs-built_in">len</span>(sigs), <span class="hljs-string">"len(signers) != len(sigs)"</span>
    <span class="hljs-keyword">assert</span> <span class="hljs-built_in">len</span>(signers) == <span class="hljs-variable language_">self</span>.k, <span class="hljs-string">"signers &lt; k"</span>

    nonce: uint256 = <span class="hljs-variable language_">self</span>.nonce
    tx_id: bytes32 = <span class="hljs-variable language_">self</span>._get_tx_id(to, data, val, nonce)
    eth_hash: bytes32 = <span class="hljs-variable language_">self</span>._get_eth_hash(tx_id)

    prev: address = empty(address)
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(signers), bound = M):
        signer: address = signers[i]
        sig: Bytes[<span class="hljs-number">65</span>] = sigs[i]

        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.auth[signer], <span class="hljs-string">"not authorized"</span>
        <span class="hljs-keyword">assert</span> convert(prev, uint256) &lt; convert(signer, uint256), <span class="hljs-string">"duplicate or unsorted signer"</span>
        prev = signer

        <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>._verify(sig, eth_hash, signer), <span class="hljs-string">"invalid sig"</span>

    <span class="hljs-variable language_">self</span>.nonce = nonce + <span class="hljs-number">1</span>
    raw_call(to, data, value = val)

    log Execute(tx_id, to, data, val, nonce)

</code></pre>`

export default html
