class Person:
    """Create a new Person"""
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

newPerson = Person("Dony", "Beckar")
anotherOne = Person("first", "last")


newPerson.fname = "Cris"
newPerson.lname = "Ronaldo"

del newPerson
#Displaying the output
print(newPerson)
# print(newPerson.fname)
# print(newPerson.lname)

# print(anotherOne.fname)
# print(anotherOne.lname)