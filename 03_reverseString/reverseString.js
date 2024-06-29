//note for self when writing function expression function() can take argument
const reverseString = function(string) {
    //use split method to return an array of single character.
    //If the separator is "", the returned array will be an array of single characters
    let temp = string.split("");

    //reverse the array
    temp.reverse();

    //convert back to string
    //join returns a string
    return temp.join('');
};

// Do not edit below this line
module.exports = reverseString;
