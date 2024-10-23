# pragma version ^0.4.0

interface ILock:
    def func(): nonpayable

count: public(uint256)

@external
@payable
def __default__():
    if self.count < 2:
        self.count += 1
        extcall ILock(msg.sender).func()

@external
def reset():
    self.count = 0

@external
def test_lock(to: address):
    extcall ILock(to).func()

