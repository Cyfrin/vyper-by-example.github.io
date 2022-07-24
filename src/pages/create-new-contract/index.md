---
title: Create New Contract
version: 0.3.3
description: Create new contract in Vyper
---

Vyper contracts can deploy new contracts using the function `create_forwarder_to`.

`create_forwarder_to` is also known as "minimal proxy contract". How it works, we won't explain it here.

Here we will focus on how to use it to deploy new contracts.

### How to use `create_forwarder_to`

1. Deploy `ContractToDeploy`. This is the "master copy." All deployed contracts will execute code from this master copy.
2. Call `deploy()` passing the address of the master copy and any other arguments needed to setup the new contract

Here is `ContractToDeploy`

ContractToDeploy.vy

```vyper
{{{ContractToDeploy}}}
```

Create.vy

```vyper
{{{Create}}}
```
