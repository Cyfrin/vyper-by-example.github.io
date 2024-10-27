// metadata
export const version = "0.4.0"
export const title = "Modules"
export const description = "Modules in Vyper"

export const keywords = ["modules", "use", "exports", "initializes"]

const html = `<p>Reuse code with modules.</p>
<pre><code>├── auth_2_step.vy
├── auth.vy
├── example_1.vy
├── example_2.vy
└── math.vy
</code></pre><h3>Importing modules</h3>
<p>math.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Pure function can easily be reused in importing module</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x * y

<span class="hljs-comment"># Not included in final code if not used by importing module</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">div</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> x // y
</code></pre><p>auth.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Not export to importing module?</span>
owner: public(address)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender

<span class="hljs-meta">@internal</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">_check_owner</span>():
    <span class="hljs-keyword">assert</span> <span class="hljs-variable language_">self</span>.owner == msg.sender

<span class="hljs-comment"># Must be exported by importing module</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_owner</span>(<span class="hljs-params">owner: address</span>):
    <span class="hljs-variable language_">self</span>._check_owner()
    <span class="hljs-variable language_">self</span>.owner = owner
</code></pre><p>example_1.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> auth
<span class="hljs-keyword">import</span> math

<span class="hljs-comment"># Need to call auth.__init__()</span>
initializes: auth
<span class="hljs-comment"># Exports auth.set_owner and auth.owner</span>
exports: (auth.set_owner, auth.owner)

my_num: public(uint256)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    auth.__init__()

<span class="hljs-comment"># Example of calling auth._check_owner</span>
<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">set_my_num</span>(<span class="hljs-params">x: uint256</span>):
    auth._check_owner()
    <span class="hljs-variable language_">self</span>.my_num = x

<span class="hljs-comment"># Example of reading auth.owner</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@view</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_owner</span>() -&gt; address:
    <span class="hljs-keyword">return</span> auth.owner

<span class="hljs-comment"># Example of importing and using a pure function</span>
<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">my_func</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
    <span class="hljs-keyword">return</span> math.mul(x, y)

</code></pre><h3>The <code>use</code> statement</h3>
<p>auth_2_step.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>
<span class="hljs-keyword">import</span> auth

<span class="hljs-comment"># This contract is not a valid contract. auth.__init__() must be called</span>
<span class="hljs-comment"># by a contract that imports and uses this contract</span>

uses: auth

pending_owner: address

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-keyword">pass</span>

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">begin_transfer</span>(<span class="hljs-params">new_owner: address</span>):
    auth._check_owner()
    <span class="hljs-variable language_">self</span>.pending_owner = new_owner

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">accept_transfer</span>():
    <span class="hljs-keyword">assert</span> msg.sender == <span class="hljs-variable language_">self</span>.pending_owner
    auth.owner = msg.sender
    <span class="hljs-variable language_">self</span>.pending_owner = empty(address)
</code></pre><p>example_2.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> auth
<span class="hljs-keyword">import</span> auth_2_step

initializes: auth
<span class="hljs-comment"># auth is dependency of auth_2_step</span>
initializes: auth_2_step[auth := auth]

<span class="hljs-comment"># export all external functions</span>
exports: auth_2_step.__interface__

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    auth.__init__()
    auth_2_step.__init__()
</code></pre>`

export default html
