// metadata
export const version = "0.3.3"
export const title = "Dynamic Arrays"
export const description = "Dynamic arrays in Vyper"

const html = `<p>Dynamic arrays are bounded arrays whose length can change. The length of the array cannot exceed the maximum length set where the array is declared.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>

<span class="hljs-comment"># Dynamic array of type uint256, max 3 elements</span>
nums: DynArray[uint256, <span class="hljs-number">3</span>]

<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    self.nums.append(<span class="hljs-number">11</span>)
    self.nums.append(<span class="hljs-number">22</span>)
    self.nums.append(<span class="hljs-number">33</span>)
    <span class="hljs-comment"># This will revert (Appending to array with max 3 elements)</span>
    <span class="hljs-comment"># self.nums.append(44)</span>

    <span class="hljs-comment"># Remove last element</span>
    self.nums.pop()

    <span class="hljs-comment"># Delete all elements</span>
    self.nums = []
    <span class="hljs-comment"># Set values</span>
    self.nums = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">examples</span>(<span class="hljs-params">xs: DynArray[uint256, <span class="hljs-number">5</span>]</span>) -&gt; DynArray[uint256, <span class="hljs-number">8</span>]:
    ys: DynArray[uint256, <span class="hljs-number">5</span>] = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
    <span class="hljs-comment"># Copy xs into ys</span>
    <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> xs:
        ys.append(x)
    <span class="hljs-keyword">return</span> ys


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">filter</span>(<span class="hljs-params">addrs: DynArray[address, <span class="hljs-number">5</span>]</span>) -&gt; DynArray[address, <span class="hljs-number">5</span>]:
    nonzeros: DynArray[address, <span class="hljs-number">5</span>] = []
    <span class="hljs-keyword">for</span> addr <span class="hljs-keyword">in</span> addrs:
        <span class="hljs-keyword">if</span> addr != ZERO_ADDRESS:
            nonzeros.append(addr)
    <span class="hljs-keyword">return</span> nonzeros
</code></pre>
`

export default html
