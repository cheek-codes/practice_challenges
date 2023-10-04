# Array plus array

# I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

# PS Each array includes onl integer numbers. Output is a number too.


"""function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; #something went wrong
}"""





# P: Will we be given an empty string? Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?




# R: Return an integer with the sum of all the elements of the array




# E: 1. If we are given [1, 2, 3], [4, 5, 6], should return 21
# E: 2. If we are given [-1, -2, -3], [-4, -5, -6], should return -21
# E: 3. If we are given [0, 0, 0], [4, 5, 6], should return 15
# E: 4. If we are given [100, 200, 300], [400, 500, 600], should return 2100






def array_plus_array(arr1,arr2):
    return sum(arr1)+sum(arr2)






def array_plus_array(arr1,arr2):
    return sum(arr1+arr2)
    





def array_plus_array(a, b):
    return sum(a+b)






def array_plus_array(arr1,arr2):
    counter = 0
    for i in arr1:
        counter += i
    for i in arr2:
        counter += i
    return counter






array_plus_array=lambda a,b: sum(a+b)






def array_plus_array(arr1,arr2):
    result=0
    for ar1,ar2 in zip(arr1,arr2):
        result = result + (ar1+ar2)
    return result