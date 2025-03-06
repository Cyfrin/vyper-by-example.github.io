// metadata
export const version = "0.4.0"
export const title = "Private and Public State Variables"
export const description = "Private and public state variables in Vyper"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/private-and-public-state-variables-vyper-code-example"

export const keywords = ["private", "public", "state", "variable", "variables"]

const html = `<p>Private state variables cannot be accessed from outside the contract.</p>
<p>Public state variables can be read by anyone, including users and other contracts.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># publis state variable</span>
owner: public(address)
<span class="hljs-comment"># private state variable</span>
foo: uint256
bar: public(<span class="hljs-built_in">bool</span>)

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.owner = msg.sender
    <span class="hljs-variable language_">self</span>.foo = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.bar = <span class="hljs-literal">True</span>
</code></pre>`

export default html
