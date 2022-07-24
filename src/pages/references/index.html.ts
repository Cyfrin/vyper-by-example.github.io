// metadata
export const version = "0.3.3"
export const title = "Data Types - References"
export const description = "References in Vyper"

const html = `<p>References types are data types that are passed by their reference, pointer to where the actual data is stored.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.3</span>


struct Person:
    name: String[<span class="hljs-number">100</span>]
    age: uint256


<span class="hljs-comment"># Fixed sized list</span>
nums: public(uint256[<span class="hljs-number">10</span>])  <span class="hljs-comment"># must be bounded</span>
myMap: public(HashMap[address, uint256])
person: public(Person)


<span class="hljs-meta">@external</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>():
    <span class="hljs-comment"># This updates self.nums[0]</span>
    self.nums[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>
    self.nums[<span class="hljs-number">9</span>] = <span class="hljs-number">456</span>
    <span class="hljs-comment"># Copies self.nums to array in memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.nums)</span>
    arr: uint256[<span class="hljs-number">10</span>] = self.nums
    arr[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>

    <span class="hljs-comment"># This updates self.myMap</span>
    self.myMap[msg.sender] = <span class="hljs-number">1</span>
    self.myMap[msg.sender] = <span class="hljs-number">11</span>

    <span class="hljs-comment"># This updates self.person</span>
    self.person.age = <span class="hljs-number">11</span>
    self.person.name = <span class="hljs-string">"Vyper"</span>
    <span class="hljs-comment"># Person struct is copied into memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.person)</span>
    p: Person = self.person
    p.name = <span class="hljs-string">"Solidity"</span>
</code></pre>
`

export default html
