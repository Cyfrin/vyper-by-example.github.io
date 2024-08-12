# @pragma version ^0.4.0

# Create a string variable that can store maximum 100 characters
greet: public(String[100])

@deploy
def __init__():
    self.greet = "Hello World"
