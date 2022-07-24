---
title: Delegate Call
version: 0.3.3
description: Delegate call in Vyper
---

When contract `A` delegates call to contract `B`, `B`'s code will be executed inside contract `A`. This will update state variables and Ether balance inside contract `A` and not `B`.

Delegate call is commonly used to create an upgradable contract.

Here is the contract that we will delegate call to.

TestDelegateCall.vy

```vyper
{{{TestDelegateCall}}}
```

DelegateCall.vy

```vyper
{{{DelegateCall}}}
```
