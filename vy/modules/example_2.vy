# pragma version ^0.4.0

import auth
import auth_2_step

initializes: auth
# auth is dependency of auth_2_step
initializes: auth_2_step[auth := auth]

# export all external functions
exports: auth_2_step.__interface__

@deploy
def __init__():
    auth.__init__()
    auth_2_step.__init__()
