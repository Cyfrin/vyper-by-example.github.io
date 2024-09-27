# pragma version ^0.4.0

# Receive Ether into this contract
@external
@payable
def __default__():
    pass

@external
def send_eth(to: address, amount: uint256):
    # when Ether is sent to a contract it will call 
    # __default__ inside the receiving contract
    # forwards 2300 gas
    send(to, amount)

@external
def send_all(to: address):
    send(to, self.balance)
