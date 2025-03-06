---
title: View and Pure Functions
version: 0.4.0
description: View and pure functions in Vyper
keywords: [view, pure, function, functions]
cyfrinLink: https://www.cyfrin.io/glossary/view-and-pure-functions-vyper-code-example
---

Both `pure` and `view` functions are read only function, they cannot write anything to the blockchain.

`pure` functions do not read any state or global variables

`view` functions can read state variables, global variables and call internal functions.

```vyper
{{{ViewPureFunctions}}}
```
