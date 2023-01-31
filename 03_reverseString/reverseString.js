const reverseString = function (inputString) {
    const stringArray = inputString.split("");
    let reversedString = stringArray.reverse();
    reversedString.toString();
    
    let joinedReversedString = reversedString.join("");



    return joinedReversedString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
/* Take the string into an array of chars 
Declare a new variable for the end result of the reversed string
Write a loop that adds individual characters to variable reversedString, going backwards from stringArray.length();
*/ 