// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// function createArray(number){
//     var newArray = [];
    
//     for(var counter = 1; counter <= number;){
//       newArray.push(counter);
//     }
    
//     return newArray;
// }



// P: Will we be given an empty string? Will we be given strings? Will we be given special charaters? Will we be given floats? Will we be given integers?




// R: Return a new string where the infinite loop is fixed



// E: none



function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter ++){
      newArray.push(counter);
    }
    return newArray;
}



const createArray = n => Array(...Array(n)).map((v, i) => i + 1);



function createArray(number){
    return Array.from({length:number},(v,i)=>i+1)
}



const createArray = number =>
  [...Array(number)].map((_, idx) => ++idx);