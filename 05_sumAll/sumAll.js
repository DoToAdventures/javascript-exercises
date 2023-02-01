const sumAll = function (a, b) {
    if(((a || b) < 0) || typeof a != 'number' || typeof b != 'number') return 'ERROR';

    let numbersBetween;
    let sum = 0;
    let smallerNumber;

    if (a < b) 
    {
        smallerNumber = a;
        numbersBetween = (b - a) + 1;
    }
    else
    {
        smallerNumber = b;
        numbersBetween = (a - b) + 1;
    } 

    for(let i = smallerNumber; i <= numbersBetween; i++)
    {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
