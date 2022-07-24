// metadata
export const version = "0.3.3"
export const title = "Create New Contract"
export const description = "Create new contract in Vyper"

const html = `<p>Vyper contracts can deploy new contracts using the function <code>create_forwarder_to</code>.</p>
<p><code>create_forwarder_to</code> is also known as "minimal proxy contract". How it works, we won&#39;t explain it here.</p>
<p>Here we will focus on how to use it to deploy new contracts.</p>
<h3 id="how-to-use-create_forwarder_to">How to use <code>create_forwarder_to</code></h3>
<ol>
<li>Deploy <code>ContractToDeploy</code>. This is the "master copy." All deployed contracts will execute code from this master copy.</li>
<li>Call <code>deploy()</code> passing the address of the master copy and any other arguments needed to setup the new contract</li>
</ol>
<p>Here is <code>ContractToDeploy</code></p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


owner: public(address)


<span class="hljs-comment"># __init__ is not called when deployed from create_forwarder_to</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
  self.owner = msg.sender


<span class="hljs-comment"># call once after create_forwarder_to</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">setup</span>(<span class="hljs-params">owner: address</span>):
  <span class="hljs-keyword">assert</span> self.owner == ZERO_ADDRESS, <span class="hljs-string">"owner != zero address"</span>
  self.owner = owner


<span class="hljs-comment"># DANGER: never have selfdestruct in original contract used by create_forwarder_to</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
  selfdestruct(msg.sender)
</code></pre>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


interface ContractToDeploy:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">setup</span>(<span class="hljs-params">owner: address</span>): nonpayable


event Log:
    addr: address


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deploy</span>(<span class="hljs-params">_masterCopy: address, owner: address</span>):
    addr: address = create_forwarder_to(_masterCopy)
    ContractToDeploy(addr).setup(owner)
    log Log(addr)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deployTest</span>(<span class="hljs-params">_masterCopy: address</span>):
    addr: address = create_forwarder_to(_masterCopy)
    ContractToDeploy(addr).setup(self)
    log Log(addr)
</code></pre>
`

export default html
