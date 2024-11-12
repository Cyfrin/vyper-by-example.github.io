import pytest
from moccasin.boa_tools import VyperContract
from src import Counter


@pytest.fixture
def counter() -> VyperContract:
    return Counter.deploy()


def test_inc(counter):
    counter.inc()
    assert counter.count() == 1

