import pytest
import boa
from moccasin.boa_tools import VyperContract
from src import Logger


@pytest.fixture
def logger() -> VyperContract:
    return Logger.deploy()


def test_log(logger):
    to = "0x00000000000000000000000000000000000000ff"
    amount = 123

    logger.transfer(to, amount)
    # logs = boa.env.get_logs()
    logs = logger.get_logs()

    assert len(logs) == 1
    print(vars(logs[0]))

    log_str = str(logs[0])
    assert log_str, f"Transfer(src={env.boa.eoa}, dst={to}, amount={amount})"
