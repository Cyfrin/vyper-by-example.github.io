# pragma version ^0.4.0

interface ITest:
    def val() -> uint256: view
    def set_val(val: uint256): nonpayable
    def set_val_with_msg_value(val: uint256): payable
    def set_val_return_val(val: uint256) -> uint256: nonpayable
    def get_val() -> uint256: view

test: public(ITest)
v: public(uint256)

@deploy
def __init__(test_addr: address):
    # store contract instance
    self.test = ITest(test_addr)
    # if you need to get address from self.test
    addr: address = self.test.address

@external
def test_set_val(val: uint256):
    extcall self.test.set_val(val)

@external
@payable
def test_msg_val(test_addr: address, val: uint256):
    extcall ITest(test_addr).set_val_with_msg_value(val, value = msg.value)

@external
def test_return_val(test_addr: address, val: uint256):
    self.v = extcall ITest(test_addr).set_val_return_val(val)

@external
@view
def test_get_val() -> uint256:
    return staticcall self.test.get_val()
