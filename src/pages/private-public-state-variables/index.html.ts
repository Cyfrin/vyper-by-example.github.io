// metadata
export const version = "0.3.3"
export const title = "Private and Public State Variables"
export const description = "Private and public state variables in Vyper"

const html = `<p>Private state variables cannot be accessed from outside the contract.</p>
<p>Public state variables can be read by anyone, including users and other contracts.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

<span class="hljs-comment"># publis state variable</span>
owner: public(address)
<span class="hljs-comment"># private state variable</span>
foo: uint256
bar: public(<span class="hljs-built_in">bool</span>)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    self.owner = msg.sender
    self.foo = <span class="hljs-number">123</span>
    self.bar = <span class="hljs-literal">True</span>
</code></pre>
`

export default html
