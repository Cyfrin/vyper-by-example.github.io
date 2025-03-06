// metadata
export const version = "0.4.0"
export const title = "Imports"
export const description = "Imports in Vyper"
export const cyfrinLink = "https://www.cyfrin.io/glossary/imports-vyper-code-example"

export const keywords = ["imports"]

const html = `<p>Different ways to import Vyper files</p>
<pre><code>├── example.vy
└── math.vy
</code></pre><p>math.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
  <span class="hljs-keyword">return</span> x * y
</code></pre><p>example.vy</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-keyword">import</span> math
<span class="hljs-comment"># Other ways to import</span>
<span class="hljs-comment"># import math as m</span>
<span class="hljs-comment"># from . import math</span>
<span class="hljs-comment"># from . import math as m</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">call_math_mul</span>(<span class="hljs-params">x: uint256, y: uint256</span>) -&gt; uint256:
  <span class="hljs-keyword">return</span> math.mul(x, y)
</code></pre>`

export default html
