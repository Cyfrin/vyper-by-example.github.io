# pragma version ^0.4.0

@external
@pure
def for_loop() -> DynArray[uint256, 10]:
    arr: DynArray[uint256, 10] = []

    for i: uint256 in range(5):
        arr.append(i)

    return arr

@external
@pure
def for_loop_start_end() -> DynArray[uint256, 10]:
    arr: DynArray[uint256, 10] = []

    for i: uint256 in range(5, 10):
        arr.append(i)

    return arr

@external
@pure
def for_loop_list() -> DynArray[uint256, 10]:
    arr: DynArray[uint256, 10] = []

    nums: uint256[4] = [11, 22, 33, 44]

    for i: uint256 in nums:
        arr.append(i)

    return arr

@external
@pure
def for_loop_skip() -> DynArray[uint256, 10]:
    arr: DynArray[uint256, 10] = []

    for i: uint256 in range(5):
        if i == 2:
            continue
        if i == 4:
            break
        arr.append(i)

    return arr

@external
@pure
def sum(nums: uint256[10]) -> uint256:
    s: uint256 = 0
    for n: uint256 in nums:
        s += n
    return s
