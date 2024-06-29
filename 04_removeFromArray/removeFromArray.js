/*const removeFromArray = function(arrayToPass, ...num) {
    //check if theres anything to delete
    if(arrayToPass.length === 0){
        return arrayToPass;
    }
    
    let arrayLen = arrayToPass.length;
    let numSize = num.length;

    //go through each element of num array to make sure you delete everything 
    //thats expected
    for (let k = 0; k < numSize; k++) {
        //loop through given array and look for match
        for (let counter = 0; counter < arrayLen; counter++) {
            //check if you find a match
            if (arrayToPass[counter] === num[k]) {
                //use splice to delete the element.
                arrayToPass.splice(counter, 1);
                //set counter back to zero to search from beginning of array again
                //for the next value to delete
                counter = 0;
            }
        }
    }
    return arrayToPass;
};*/
const removeFromArray = function(array, ...num) {
    //create a new array
    const newArray = [];

    //push every element that isnt on the num array into the
    //arrow function of forEach
    array.forEach((value) => {
        //push the current element if its not to be deleted
        //to the new array
        if (!num.includes(value)){
            newArray.push(value);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
