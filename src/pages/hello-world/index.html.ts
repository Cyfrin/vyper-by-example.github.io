// metadata
export const version = "0.3.9"
export const title = "Hello World"
export const description = "Hello world in Vyper"

export const keywords = ["hello", "world", "version"]

const html = `<p><code>@version</code> specifies the compiler version of Vyper.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.0</span>

<span class="hljs-comment"># Create a string variable that can store maximum 100 characters</span>
greet: public(String[<span class="hljs-number">100</span>])

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-variable language_">self</span>.greet = <span class="hljs-string">"Hello World"</span>
</code></pre>`

export default html
