---
title: Immutable
version: 0.4.0
description: Immutable in Vyper
keywords: [immutable, immutables, constant, constants]
---

Immutable variables are like constants except value are assigned when the contract is deployed.

### When to use `immutable` variables?

- You have a variable that needs to be set when the contract is deployed,
  for example like setting contract owner to `msg.sender`
- and this variable will never change after deployment

#### Why declare variables as `immutable`?

Like constants, `immutable` variables save run time gas

```vyper
{{{Immutable}}}
```
