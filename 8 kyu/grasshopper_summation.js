// Grasshopper - Summation

// Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// summation(2) -> 3
// 1 + 2

//summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8



// P: Will I be given special characters? Will I be given strings? Will I be given floats? Will I be given negative integers? Will it only be given positive integers?



// R: Return the total sum of every number from 1 to given number. 



// E: 1. If we are given a number of 2, should return 3 because 1 + 2 = 3
// E: 2. If we are given a number of 8, should return 36 because 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
// E: 3. I we are given a number of 4, should return 10 because 1 + 2 + 3 + 4 = 10



var summation = function (num){
    // create a new variable to hold the numbers. let it equal to 0 so it can hold the numbers.
    let math = 0

    // use for loop to loop through all the integers from 1 to the number given. then add all the integers to the variable the i created.
    for(let i = 0; i <= num; i ++){
        math += i
    }

    // return the variable i created to show the total sum.
    return math
}

