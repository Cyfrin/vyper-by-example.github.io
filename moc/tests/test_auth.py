import pytest
import boa
from moccasin.boa_tools import VyperContract
from src import Auth


@pytest.fixture
def auth() -> VyperContract:
    return Auth.deploy()


def test_auth(auth):
    assert auth.owner() == boa.env.eoa

    addr = "0x00000000000000000000000000000000000000ff"

    with boa.env.prank(addr):
        with boa.reverts():
            auth.set_owner(addr)

    auth.set_owner(addr)
    assert auth.owner() == addr
