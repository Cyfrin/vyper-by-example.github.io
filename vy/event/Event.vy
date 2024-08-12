# @pragma version ^0.4.0

# up to 3 index
event Transfer:
    # enables quick search of all Transfer events where sender is a certain address
    sender: indexed(address)
    # enables quick search of all Transfer events where receiver is a certain address
    receiver: indexed(address)
    amount: uint256

@external
def transfer(receiver: address, amount: uint256):
    # some code ...
    log Transfer(msg.sender, receiver, amount)

@external
def mint(amount: uint256):
    # some code ...
    log Transfer(empty(address), msg.sender, amount)

@external
def burn(amount: uint256):
    # some code ...
    log Transfer(msg.sender, empty(address), amount)
