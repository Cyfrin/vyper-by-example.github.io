// metadata
export const version = "0.3.9"
export const title = "Interface"
export const description = "Interface in Vyper"

export const keywords = ["interface", "interfaces"]

const html = `<p>Use <code>interface</code> to call other smart contracts.</p>
<p>Here is the <code>TestInterface</code> self.contract that we will call.</p>
<p>TestInterface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.9</span>


owner: public(address)
eth: public(uint256)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>.owner = owner


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sendEth</span>():
    <span class="hljs-variable language_">self</span>.eth = msg.value


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwnerAndSendEth</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>.owner = owner
    <span class="hljs-variable language_">self</span>.eth = msg.value
</code></pre><p>Interface.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.9</span>


interface TestInterface:
    <span class="hljs-comment"># get address of owner</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">owner</span>() -&gt; address: view
    <span class="hljs-comment"># set new owner</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwner</span>(<span class="hljs-params">owner: address</span>): nonpayable
    <span class="hljs-comment"># send ETH</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">sendEth</span>(): payable
    <span class="hljs-comment"># set owner and send ETH</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwnerAndSendEth</span>(<span class="hljs-params">owner: address</span>): payable


<span class="hljs-comment"># store contract having the above interface</span>
test: public(TestInterface)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">test: address</span>):
    <span class="hljs-comment"># store contract instance</span>
    <span class="hljs-variable language_">self</span>.test = TestInterface(test)
    <span class="hljs-comment"># if you need to get address from self.test</span>
    addr: address = <span class="hljs-variable language_">self</span>.test.address


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getOwner</span>() -&gt; address:
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">self</span>.test.owner()


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">getOwnerFromAddress</span>(<span class="hljs-params">test: address</span>) -&gt; address:
    <span class="hljs-comment"># you can also call functions by passing in the address of the interface</span>
    <span class="hljs-keyword">return</span> TestInterface(test).owner()


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>.test.setOwner(owner)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sendEth</span>():
    <span class="hljs-variable language_">self</span>.test.sendEth(value=msg.value)


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@payable</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setOwnerAndSendEth</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>.test.setOwnerAndSendEth(owner, value=msg.value)
</code></pre>`

export default html
