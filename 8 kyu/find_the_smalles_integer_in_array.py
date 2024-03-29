# Find the smallest integer in the array


# Given an array of integers your solution should find the smallest integer. 

# For example:
# Given [34, 15, 88, 2] your solution will return [2]
# Given [31, -345, -1, 100] your solution will return [-345]

# You can assume, for the purpose of this kata, that the supplies array will not be empty.



# P: Will we be given special characters? Will we be given strings? Will we be given an empty array? Will we be given floats? Will we be given only integers?



# R: Return the lowest integer in the array which includes negative integers



# E: 1. If we are given an array of [34, 15, 88, 2], should return 2
# E: 2. If we are given an array of [34, -345, -1, 100], should return -345
# E: 3. If we are given an array of [78, 56, 232, 412, 228], should return 56
# E: 4. If we are given an array of [1, -56, 232, 12, 8], should return -56






def find_smallest_int(arr):
    arr.sort()
    num = arr.pop(0)
    return num






def findSmallestInt(arr):
    return min(arr)






def findSmallestInt(arr):
    arr.sort()
    return arr[0]






findSmallestInt=min   






def findSmallestInt(arr):
    smallest = []
    for i in range(0,len(arr)):
        if (arr[i] < smallest):
            smallest = arr[i]
    return smallest






def findSmallestInt(arr):
    min = arr[0]
    for item in arr:
        if min > item:
            min = item
    return min






def find_smallest_int(arr):
  return sorted(arr)[0]