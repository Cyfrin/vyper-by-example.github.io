import pytest
import boa
from moccasin.boa_tools import VyperContract
from src import Payable


@pytest.fixture
def payable() -> VyperContract:
    return Payable.deploy()


def test_pay(payable):
    boa.env.set_balance(boa.env.eoa, 100)
    payable.deposit(value=1)
    assert boa.env.get_balance(payable.address) == 1
