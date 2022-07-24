# @version ^0.3.3


@external
@pure
def forLoop():
    # for loop through range
    # sum from 0 to 9
    s: uint256 = 0
    for i in range(10):
        s += i

    # for loop through array elements
    # find minimum of nums
    nums: uint256[5] = [4, 5, 1, 9, 0]
    x: uint256 = MAX_UINT256
    for num in nums:
        if x < num:
            x = num

    # continue - skip current iteration
    # break - exit for loop
    c: uint256 = 0
    for i in [1, 2, 3, 4, 5]:
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
    for n in nums:
        s += n
    return s
