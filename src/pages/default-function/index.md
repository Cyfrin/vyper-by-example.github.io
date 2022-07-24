---
title: Default Function
version: 0.3.3
description: Default function in Vyper
---

A contract can have a default function, executed when a function that does not exist is called. This is the same function as the fallback function in Solidity.

This function is named `__default__` and it is commonly used to receive Ether.

```vyper
{{{DefaultFunction}}}
```
