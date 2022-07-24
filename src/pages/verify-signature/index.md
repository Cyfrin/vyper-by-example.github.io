---
title: Verify Signature
version: 0.3.3
description: Verify signature in Vyper
---

Signing and verifying signature takes 3 steps.

1. Hash the data to sign. This can be done with and without a smart contract.
2. Sign the hash. This must be done off chain.
3. Verify the signature. This is done using a smart contract.

```vyper
{{{VerifySig}}}
```
