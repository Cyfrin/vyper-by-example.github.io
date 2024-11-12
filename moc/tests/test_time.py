import pytest
import boa
from moccasin.boa_tools import VyperContract
from src import Time


@pytest.fixture
def time() -> VyperContract:
    return Time.deploy()


def test_timestamp(time):
    print(boa.eval("block.timestamp"))
    assert not time.ended()

    with boa.reverts():
        time.close()

    boa.env.time_travel(1000)
    print(boa.eval("block.timestamp"))

    time.close()
    assert time.ended()
