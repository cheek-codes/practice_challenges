// Multiply

// This code does not execute properly. Try to figure out why.



// P: Will we be given a string? Will we be given an empty string? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a code that fixes it because this code does not work



// E: just fix the damn code



// given:
/*
function multiply (a, b){
    a*b
}
*/



function multiply(a, b){
    return a * b
}



multiply = function (a, b) {
    return a * b;
}



function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
}



multiply = (a, b) => a * b;



const multiply = (a, b) => a * b;



const multiply = (...arg) => arg.reduce((num, arr) => arr * num)



const multiply = Math.imul 