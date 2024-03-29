// Even or odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers of "Odd" for odd numbers.



// P: Will we be given an empty string? Will we be given a string? Will we be given a float? Will we be given an integer? Will we be given a negative integer? Will we be given a positive integer?



// R: Return "Even" if the given integer is an even number (if the given number is divisible by 2 and has no remainders)
// R: Return "Odd" if the given integer is an odd number (if the given number is not divisible by 2 and has remainders)



// E: 1. If we were given 2, should return "Even"
// E: 2. If we were given 7, should return "Odd"
// E: 3. If we were given -42, should return "Even"
// E: 4. If we were given -7, should return "Odd"
// E: 5. If we were given 0, should return "Even"



function even_or_odd(number){
    // set up if else statement
    // if number % by 2 === 0, return "Even"
    if(number % 2 === 0){
        return "Even"
    }
    // or else, return "Odd"
    else{
        return "Odd"
    }
}




// less lines
function even_or_odd(number){
    return number % 2 === 0 ? "Even" : "Odd"
}



// even less lines
const even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"



// even lesser lines
const even_or_odd = number => (number % 2) ? "Odd" : "Even"