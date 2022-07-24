// metadata
export const version = "0.3.3"
export const title = "Create New Contract"
export const description = "Create new contract in Vyper"

const html = `<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


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
