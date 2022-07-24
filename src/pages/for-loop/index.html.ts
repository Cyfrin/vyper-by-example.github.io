// metadata
export const version = "0.3.3"
export const title = "For Loop"
export const description = "For loop in Vyper"

const html = `<p>There are 2 ways to loop through an array, using <code>range</code> and directly looping through array elements.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">forLoop</span>():
    <span class="hljs-comment"># for loop through range</span>
    <span class="hljs-comment"># sum from 0 to 9</span>
    s: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">10</span>):
        s += i

    <span class="hljs-comment"># for loop through array elements</span>
    <span class="hljs-comment"># find minimum of nums</span>
    nums: uint256[<span class="hljs-number">5</span>] = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1</span>, <span class="hljs-number">9</span>, <span class="hljs-number">0</span>]
    x: uint256 = MAX_UINT256
    <span class="hljs-keyword">for</span> num <span class="hljs-keyword">in</span> nums:
        <span class="hljs-keyword">if</span> x &lt; num:
            x = num

    <span class="hljs-comment"># continue - skip current iteration</span>
    <span class="hljs-comment"># break - exit for loop</span>
    c: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]:
        <span class="hljs-comment"># skip 2</span>
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">2</span>:
            <span class="hljs-keyword">continue</span>
        <span class="hljs-comment"># end loop at i = 4</span>
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">4</span>:
            <span class="hljs-keyword">break</span>
        <span class="hljs-comment"># otherwise increment c by 1</span>
        c += <span class="hljs-number">1</span>
    <span class="hljs-comment"># c = 2 (incremented at i = 1 and 3)</span>


<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">nums: uint256[<span class="hljs-number">10</span>]</span>) -&gt; uint256:
    s: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> n <span class="hljs-keyword">in</span> nums:
        s += n
    <span class="hljs-keyword">return</span> s
</code></pre>
`

export default html
