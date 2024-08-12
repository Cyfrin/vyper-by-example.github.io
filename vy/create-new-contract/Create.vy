# @pragma version ^0.4.0

interface ContractToDeploy:
    def set_owner(owner: address): nonpayable

event Log:
    addr: address

@external
def deploy(master_copy: address, owner: address):
    addr: address = create_forwarder_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(owner)
    log Log(addr)

@external
def deploy_test(master_copy: address):
    addr: address = create_forwarder_to(master_copy)
    extcall ContractToDeploy(addr).set_owner(self)
    log Log(addr)
