#The while loop
x = 1

while x < 7:
    x = x + 1
    if x == 3:
        continue
    print(x)
else:
    print("x is no longer less than 7!")