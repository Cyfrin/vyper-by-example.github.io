// metadata
export const version = "0.4.0"
export const title = "Data Types - Values"
export const description = "Values in Vyper"

export const keywords = [
  "data",
  "type",
  "types",
  "value",
  "values",
  "variable",
  "variables",
  "bool",
  "int128",
  "uint256",
  "decimals",
  "address",
  "bytes32",
  "Bytes",
  "String",
]

const html = `<p>Some values available in Vyper</p>
<ul>
<li><code>bool</code></li>
<li><code>int128</code></li>
<li><code>uint256</code></li>
<li><code>decimals</code></li>
<li><code>address</code></li>
<li><code>bytes32</code></li>
<li><code>Bytes</code></li>
<li><code>String</code></li>
</ul>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Must be compiled with --enable-decimals</span>

b: public(<span class="hljs-built_in">bool</span>)
i: public(int128)  <span class="hljs-comment"># -2 ** 127 to (2 ** 127 - 1)</span>
u: public(uint256)  <span class="hljs-comment"># 0 to 2 ** 256 - 1</span>
dec: public(decimal)  <span class="hljs-comment"># -2 ** 127 to (2 ** 127 - 1), 10 decimal places</span>
addr: public(address)
b32: public(bytes32)
bs: public(Bytes[<span class="hljs-number">100</span>])
s: public(String[<span class="hljs-number">100</span>])

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.b = <span class="hljs-literal">False</span>
    <span class="hljs-variable language_">self</span>.i = -<span class="hljs-number">1</span>
    <span class="hljs-variable language_">self</span>.u = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.dec = <span class="hljs-number">3.14</span>
    <span class="hljs-variable language_">self</span>.addr = <span class="hljs-number">0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</span>
    <span class="hljs-variable language_">self</span>.b32 = <span class="hljs-number">0xada1b75f8ae9a65dcc16f95678ac203030505c6b465c8206e26ae84b525cdacb</span>
    <span class="hljs-variable language_">self</span>.bs = <span class="hljs-string">b"\\x01"</span>
    <span class="hljs-variable language_">self</span>.s = <span class="hljs-string">"Hello Vyper"</span>
</code></pre>`

export default html
