// Check same case

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// Examples:
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1



// P: Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers? Will we be given strings? Will we be given an empty string? Will we be given uppercase letters? Will we be given lower case letters? Will we be given special characters?




// R: Return -1 if either of the characters is not a letter
// R: Return 1 if both characters are the same case
// R: Return 0 if both characters are letters



// E: 1. If we are given "a" and "g", should return 1
// E: 2. If we are given "A" and "C", should return 1
// E: 3. If we are given "b" and "G", should return 0
// E: 4. If we are given "B" and "g", should return 0
// E: 5. If we are given "0" and "?", should return -1



function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
}



function sameCase(a, b){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
    const checkCase = x => {
      if(x === x.toLowerCase()) return 'lower'
      if(x === x.toUpperCase()) return 'upper'
    }
  
    return checkCase(a) === checkCase(b) ? 1 : 0
}



function sameCase(a, b){
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
    if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
    return 1;
}



sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1



function sameCase(a, b){
    // Am regex fiend, but trying to force myself not to use it
    // If a character is not a letter then the cases will match each other
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
      return -1;
    }
    return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
}



const isLower = s => /[a-z]/.test(s)
const isLetter = s => /[a-zA-Z]/.test(s)

const sameCase = (a, b) => isLetter(a) && isLetter(b) 
  ? isLower(a) === isLower(b) ? 1 : 0
  : -1



const sameCase = (a, b) => /[^a-z]/i.test(a + b) ? -1 : a === a.toLowerCase() ^ b === b.toUpperCase();



sameCase=(a,b)=>/^[A-Za-z]+$/g.test(a+b)?a<{}==b<{}?1:0:-1