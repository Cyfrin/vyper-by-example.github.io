# @pragma version ^0.4.0

@external
@pure
def for_loop():
    # for loop through range
    # sum from 0 to 9
    s: uint256 = 0
    for i: uint256 in range(10):
        s += i

    # for loop through array elements
    # find minimum of nums
    nums: uint256[5] = [4, 5, 1, 9, 0]
    x: uint256 = max_value(uint256)
    for num: uint256 in nums:
        if x < num:
            x = num

    # continue - skip current iteration
    # break - exit for loop
    c: uint256 = 0
    for i: uint256 in [1, 2, 3, 4, 5]:
        # skip 2
        if i == 2:
            continue
        # end loop at i = 4
        if i == 4:
            break
        # otherwise increment c by 1
        c += 1
    # c = 2 (incremented at i = 1 and 3)

@external
@pure
def sum(nums: uint256[10]) -> uint256:
    s: uint256 = 0
    for n: uint256 in nums:
        s += n
    return s
