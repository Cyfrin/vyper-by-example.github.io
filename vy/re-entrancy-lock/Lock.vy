# pragma version ^0.4.0

@external
@nonreentrant
def func():
    raw_call(msg.sender, b"", value=0)

