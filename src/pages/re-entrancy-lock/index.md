---
title: Re-Entrancy Lock
version: 0.4.0
description: Re-entrancy lock in Vyper
keywords: [re-entrancy, lock, nonreentrant]
---

Vyper has a handy way to secure your contract from re-entrancy.

A re-entrancy lock can be created on a function with `@nonreentrant`.

Contract with re-entrancy lock

```vyper
{{{Lock}}}
```

Contract without re-entrancy lock

```vyper
{{{NoLock}}}
```

Contract to test re-entrancy

```vyper
{{{TestLock}}}
```
