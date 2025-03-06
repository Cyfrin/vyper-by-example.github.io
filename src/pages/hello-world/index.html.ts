// metadata
export const version = "0.4.0"
export const title = "Hello World"
export const description = "Hello world in Vyper"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/hello-world-vyper-code-example"

export const keywords = ["hello", "world", "version"]

const html = `<p><code>pragma</code> specifies the compiler version of Vyper.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-comment"># Create a string variable that can store maximum 100 characters</span>
greet: public(String[<span class="hljs-number">100</span>])

<span class="hljs-meta">@deploy</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre>`

export default html
