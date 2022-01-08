#Odd Echo
#https: // open.kattis.com/problems/oddecho

import sys

arr=[]

for i in sys.stdin:
    arr.append(*(i.strip().split("\n")))

for index, val in enumerate(arr):
    if(index%2 == 1):
    	print(val)