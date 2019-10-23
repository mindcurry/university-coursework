#q3.py
#algorithms and data structures assignment 2018-19 question 3
#matthew johnson 21 november 2018

#####################################################

"""See adspractical4.py for further explanations of the usage of stacks
and queues."""

#####################################################



class Node:
    def __init__(self, data, before=None, after=None):
        self.data = data
        self.before = before
        self.after = after

########
#STACKS#
########

class Stack:
    def __init__(self):
        self.head = None
    def isEmpty(self):
        return self.head == None
    def pop(self):
        output = self.head.data
        self.head = self.head.before
        return output
    def push(self, data):
        self.head = Node(data, self.head)
    def top(self):
        return self.head.data

########
#QUEUES#
########

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
    def isEmpty(self):
        return self.front == None
    def dequeue(self):
        output = self.front.data
        self.front = self.front.after
        if self.front == None:
            self.rear = None
        return output
    def enqueue(self, data):
        if self.rear == None:
            self.front = Node(data)
            self.rear = self.front
        else:
            self.rear.after = Node(data, self.rear)
            self.rear = self.rear.after
    
#####################################################

def good_expression(expression):
    # For completeness, remove all the spaces from the string just in case there are any
    expression=expression.replace(" ", "")
    # Initialise flags for if the statement is valid, if a close bracket was the last term and if the stack became empty on the last loop
    flag=0
    empty=False
    valid = True
    # Initialise a stack to store the operators
    data=Stack()

    for i in expression:
        count=0
        # The below if statement will trigger if a close bracket occurred on the last loop
        if flag==1 and empty==False:
            after = i
            before = b
            # If there isn't a multiplication on either of the sides of a pair of brackets, the statement is invalid
            if before!="*" and after!="*":
                valid=False
                break
        # If empty is True, then the first bracket of the pair was the first thing in the string, so there would need to be multiplication on the other side
        elif empty:
            after = i
            if after!="*":
                valid=False
        flag=0
        empty=0
        # If I is an operator or open bracket, just push it to the stack
        if i=="*" or i=="+" or i=="(":
            data.push(i)
        # But if i is a close bracket, more needs to be done
        if i==")":
            # Check if the stack is empty, as I will be popping from it, if it is empty, then there is an error
            if data.isEmpty()==True:
                valid=False
                break
            # Temporarily make valid false, for the purpose of checking the symbols in the bracket
            valid=False
            b=data.pop()
            while b!="(" and data.isEmpty()==False:
                # There needs to be an addition somewhere in the bracket, otherwise it is unnecessary
                if b=="+":
                    valid=True
                count+=1
                b = data.pop()
            # If there wasn't an addition, then break out of the loop ad the expression is bad
            if valid==False:
                break
            # If the bracket only had one symbol in it, it is unnecessary, and so the expression is bad
            if count==0:
                valid=False
                break
            # If the stack is empty, set the flag for the next element to check against
            if data.isEmpty()==True:
                empty=True
                flag=1
                continue
            b=data.top()
            flag=1
    # If the flag was set on the last element
    if flag==1:
        # If the symbol before the brackets isn't a multiply, then the statement is false
        if b!="*":
            valid=False

    return valid





