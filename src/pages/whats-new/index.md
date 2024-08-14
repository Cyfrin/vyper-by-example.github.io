---
title: What's New
version: 0.4.0
description: What's new in Vyper 0.4
keywords: [vyper, 0.4]
---

### pragma version

0.3

```vyper
# @version ^0.3.0
```

0.4

```vyper
#pragma version ^0.4.0
```

### Optimization mode

`codesize`, `gas` (default), or `none`

```vyper
#pragma version ^0.4.0 optimize codesize
```

### Constructor

0.3

```vyper
@external
def __init__():
    self.greet = "Hello World"
```

0.4

```vyper
@deploy
def __init__():
    self.greet = "Hello World"
```

### For loop

0.3

```vyper
for addr in addrs:
    ...
```

0.4

```vyper
for addr: address in addrs:
    ...
```

### Division

0.3

```shell
x / y
```

0.4

```shell
x // y
```

### Constants

0.3

```vyper
ZERO_ADDRESS
MAX_UINT256
EMPTY_BYTES32
```

0.4

```vyper
empty(address)
max_value(uint256)
empty(bytes32)
```

### Interface

```vyper
static IFoo(addr).bar()
extcall IFoo(addr).bar()
```

### Re-entrancy locks

0.3

```vyper
@nonreentrant("lock")
```

0.4

```vyper
@nonreentrant
```

### Modules

See [modules](/modules)
