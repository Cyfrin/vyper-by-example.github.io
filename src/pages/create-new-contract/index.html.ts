// metadata
export const version = "0.4.0"
export const title = "Create New Contract"
export const description = "Create new contract in Vyper"

export const keywords = ["create", "new", "contract", "create_forwarder_to"]

const html = `<p>Vyper contracts can deploy new contracts using the function <code>create_forwarder_to</code>.</p>
<p><code>create_forwarder_to</code> is also known as "minimal proxy contract". How it works, we won&#39;t explain it here.</p>
<p>Here we will focus on how to use it to deploy new contracts.</p>
<h3>How to use <code>create_forwarder_to</code></h3>
<ol>
<li>Deploy <code>ContractToDeploy</code>. This is the "master copy." All deployed contracts will execute code from this master copy.</li>
<li>Call <code>deploy()</code> passing the address of the master copy and any other arguments needed to setup the new contract</li>
</ol>
<p>Here is <code>ContractToDeploy</code></p>
<p>ContractToDeploy.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @pragma version ^0.4.0</span>

owner: public(address)

<span class="hljs-comment"># __init__ is not called when deployed from create_forwarder_to</span>
<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
  <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-comment"># call once after create_forwarder_to</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
  <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.owner == empty(address), <span class="hljs-string">"owner != zero address"</span>
  <span class="hljs-variable language_">self</span>.owner = owner

<span class="hljs-comment"># DANGER: never have selfdestruct in original contract used by create_forwarder_to</span>
<span class="hljs-comment"># This function has been deprecated from version 0.3.8 onwards. The underlying</span>
<span class="hljs-comment"># opcode will eventually undergo breaking changes, and its use is not recommended.</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">kill</span>():
  selfdestruct(msg.sender)
</code></pre><p>Create.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @pragma version ^0.4.0</span>

interface ContractToDeploy:
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>): nonpayable

event Log:
    addr: address

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deploy</span>(<span class="hljs-params">master_copy: address, owner: address</span>):
    addr: address = create_minimal_proxy_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(owner)
    log Log(addr)

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">deploy_test</span>(<span class="hljs-params">master_copy: address</span>):
    addr: address = create_minimal_proxy_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(<span class="hljs-variable language_">self</span>)
    log Log(addr)
</code></pre>`

export default html
