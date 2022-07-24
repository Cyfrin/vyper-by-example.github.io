# @version ^0.3.3

# publis state variable
owner: public(address)
# private state variable
foo: uint256
bar: public(bool)


@external
def __init__():
    self.owner = msg.sender
    self.foo = 123
    self.bar = True
