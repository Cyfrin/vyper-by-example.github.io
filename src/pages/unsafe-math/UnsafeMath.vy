# @version ^0.3.9


@external
def test_add(x: uint256, y: uint256) -> uint256:
    # 21510 gas
    # return x + y

    # 21472 gas
    return unsafe_add(x, y)


@external
def test_sub(x: uint256, y: uint256) -> uint256:
    # 21533 gas
    # return x - y

    # 21495 gas
    return unsafe_sub(x, y)


@external
def test_mul(x: uint256, y: uint256) -> uint256:
    # 21578 gas
    # return x * y

    # 21520 gas
    return unsafe_mul(x, y)


@external
def test_div(x: uint256, y: uint256) -> uint256:
    # 21578 gas
    # return x / y

    # 21543 gas
    return unsafe_div(x, y)
