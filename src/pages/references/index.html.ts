// metadata
export const version = "0.3.9"
export const title = "Data Types - References"
export const description = "References in Vyper"

export const keywords = [
  "data",
  "type",
  "types",
  "reference",
  "references",
  "variable",
  "variables",
  "array",
  "arrays",
  "struct",
  "structs",
  "HashMap",
  "mapping",
]

const html = `<p>References types are data types that are passed by their reference, pointer to where the actual data is stored.</p>
<pre><code class="language-vyper"><span class="hljs-comment"># @version ^0.3.9</span>


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
    <span class="hljs-variable language_">self</span>.nums[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>
    <span class="hljs-variable language_">self</span>.nums[<span class="hljs-number">9</span>] = <span class="hljs-number">456</span>
    <span class="hljs-comment"># Copies self.nums to array in memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.nums)</span>
    arr: uint256[<span class="hljs-number">10</span>] = <span class="hljs-variable language_">self</span>.nums
    arr[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>

    <span class="hljs-comment"># This updates self.myMap</span>
    <span class="hljs-variable language_">self</span>.myMap[msg.sender] = <span class="hljs-number">1</span>
    <span class="hljs-variable language_">self</span>.myMap[msg.sender] = <span class="hljs-number">11</span>

    <span class="hljs-comment"># This updates self.person</span>
    <span class="hljs-variable language_">self</span>.person.age = <span class="hljs-number">11</span>
    <span class="hljs-variable language_">self</span>.person.name = <span class="hljs-string">"Vyper"</span>
    <span class="hljs-comment"># Person struct is copied into memory.</span>
    <span class="hljs-comment"># Does not modify referenced variable (self.person)</span>
    p: Person = <span class="hljs-variable language_">self</span>.person
    p.name = <span class="hljs-string">"Solidity"</span>
</code></pre>`

export default html
