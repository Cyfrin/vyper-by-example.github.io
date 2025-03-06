// metadata
export const version = "0.4.0"
export const title = "Interface"
export const description = "Interface in Vyper"
export const cyfrinLink = "https://www.cyfrin.io/glossary/interface-vyper-code-example"

export const keywords = ["interface", "interfaces"]

const html = `<p>Use <code>interface</code> to call other smart contracts.</p>
<p>Here is the <code>TestInterface</code> self.contract that we will call.</p>
<p>TestInterface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

val: public(uint256)
msg_value: public(uint256)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val</span>(<span class="hljs-params">val: uint256</span>):
    <span class="hljs-variable language_">self</span>.val = val

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_with_msg_value</span>(<span class="hljs-params">val: uint256</span>):
    <span class="hljs-variable language_">self</span>.val = val
    <span class="hljs-variable language_">self</span>.msg_value = msg.value

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_return_val</span>(<span class="hljs-params">val: uint256</span>) -&gt; uint256:
    <span class="hljs-variable language_">self</span>.val = val
    <span class="hljs-keyword">return</span> val

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_val</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.val

</code></pre><p>Interface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

interface ITest:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">val</span>() -&gt; uint256: view
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val</span>(<span class="hljs-params">val: uint256</span>): nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_with_msg_value</span>(<span class="hljs-params">val: uint256</span>): payable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_val_return_val</span>(<span class="hljs-params">val: uint256</span>) -&gt; uint256: nonpayable
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_val</span>() -&gt; uint256: view

test: public(ITest)
v: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">test_addr: address</span>):
    <span class="hljs-comment"># store contract instance</span>
    <span class="hljs-variable language_">self</span>.test = ITest(test_addr)
    <span class="hljs-comment"># if you need to get address from self.test</span>
    addr: address = <span class="hljs-variable language_">self</span>.test.address

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_set_val</span>(<span class="hljs-params">val: uint256</span>):
    extcall <span class="hljs-variable language_">self</span>.test.set_val(val)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_msg_val</span>(<span class="hljs-params">test_addr: address, val: uint256</span>):
    extcall ITest(test_addr).set_val_with_msg_value(val, value = msg.value)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_return_val</span>(<span class="hljs-params">test_addr: address, val: uint256</span>):
    <span class="hljs-variable language_">self</span>.v = extcall ITest(test_addr).set_val_return_val(val)

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">test_get_val</span>() -&gt; uint256:
    <span class="hljs-keyword">return</span> staticcall <span class="hljs-variable language_">self</span>.test.get_val()
</code></pre>`

export default html
