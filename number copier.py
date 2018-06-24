import os
print ("")
number = int(input("What was the last number?   "))
print ("")
data = str(number)
while True:
    if input("Go?   ") == "y":
        number = number + 1
        print (number)
        data = str(number)
        while len(data) < 1980 :
            number = number + 1
            data = data + "\n" + str(number)
        os.system("echo '%s' | pbcopy" % data)
