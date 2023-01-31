const reverseString = function (inputString) {
    const stringArray = inputString.split("");
    let reversedString = stringArray.reverse();
    reversedString.toString();
    
    let joinedReversedString = reversedString.join("");



    return joinedReversedString;
};

reverseString('hello');


module.exports = reverseString;
