# @version ^0.3.3


@external
@nonreentrant("lock")
def func0():
    # call back msg.sender
    raw_call(msg.sender, b"", value=0)


@external
@nonreentrant("lock-2")
def func1():
    raw_call(msg.sender, b"", value=0)


@external
@nonreentrant("lock-2")
def func2():
    raw_call(msg.sender, b"", value=0)
