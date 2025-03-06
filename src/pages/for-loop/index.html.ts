// metadata
export const version = "0.4.0"
export const title = "For Loop"
export const description = "For loop in Vyper"
export const cyfrinLink = "https://www.cyfrin.io/glossary/for-loop-vyper-code-example"

export const keywords = ["for", "loop", "loops", "range"]

const html = `<p>There are 2 ways to loop through an array, using <code>range</code> and directly looping through array elements.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># pragma version ^0.4.0</span>

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_start_end</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>, <span class="hljs-number">10</span>):
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_list</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    nums: uint256[<span class="hljs-number">4</span>] = [<span class="hljs-number">11</span>, <span class="hljs-number">22</span>, <span class="hljs-number">33</span>, <span class="hljs-number">44</span>]

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> nums:
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_skip</span>() -&gt; DynArray[uint256, <span class="hljs-number">10</span>]:
    arr: DynArray[uint256, <span class="hljs-number">10</span>] = []

    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">2</span>:
            <span class="hljs-keyword">continue</span>
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">4</span>:
            <span class="hljs-keyword">break</span>
        arr.append(i)

    <span class="hljs-keyword">return</span> arr

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_bound</span>(<span class="hljs-params">start: uint256, end: uint256</span>) -&gt; uint256:
  last: uint256 = start
  <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(start, end, bound = <span class="hljs-number">5</span>):
    last = i
  <span class="hljs-keyword">return</span> last

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">for_loop_bound_dyn_arr</span>(<span class="hljs-params">xs: DynArray[uint256, <span class="hljs-number">5</span>]</span>) -&gt; uint256:
    last: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> i: uint256 <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(xs), bound = <span class="hljs-number">3</span>):
      last = i
    <span class="hljs-keyword">return</span> last

<span class="hljs-meta">@external</span>
<span class="hljs-meta">@pure</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">sum</span>(<span class="hljs-params">nums: uint256[<span class="hljs-number">10</span>]</span>) -&gt; uint256:
    s: uint256 = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> n: uint256 <span class="hljs-keyword">in</span> nums:
        s += n
    <span class="hljs-keyword">return</span> s
</code></pre>`

export default html
