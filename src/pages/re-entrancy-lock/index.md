---
title: Re-Entrancy Lock
version: 0.3.3
description: Re-entrancy lock in Vyper
---

Vyper has a handy way to secure your contract from re-entrancy.

A re-entrancy lock can be created on a function with `@nonreentrant("lock")`.

Functions can be locked together by using the same name for the locks.

```vyper
{{{ReEntrancyLock}}}
```
