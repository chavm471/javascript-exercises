//checks if number is even
function isEven(num) {
    return num % 2 === 0;
}

const arr = [1,2,3,4,5];

//for every even number  triple it
//const new_array = arr.filter(isEven);
//or
const new_array = arr.filter((num) => num % 2 === 0)

//create a new array with just the even numbers inside of it
const tripledNumbers= new_array.map((num) => num * 3);

//iterate through each index of array and add them up
const total = tripledNumbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0)

console.log(total)