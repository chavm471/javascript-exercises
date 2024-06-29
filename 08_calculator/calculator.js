const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	//check if array is empty
  let size = array.length;
  let sum =0;
  //loop through array 
  for(let i = 0; i <size; ++i){
    //add each element 
    sum += array[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let arraySize = numbers.length - 1; //the last index of an error is /0 so subtract 1
  let sum = numbers[0]; //set sum to first value;

  //run through array of numbers and multiply
  for(let i = 1; i <= arraySize; ++i){
    sum = sum * numbers[i];
    console.log(`The value at index ${i} is ${numbers[i]}`);
  }
  return sum;
};

const power = function(num1, num2) {
	/*let sum = num1;

  // i used less than instead of less than equals because i made sum = to the
  // number you are getting the power. that way it doesnt multiply an extra number
  for(let i = 1 ; i < num2; i++){
    sum = sum * num1;
  }
  return sum;*/
   return Math.pow(num1,num2);
};

const factorial = function(number) {
	let sum =1;

  for(let i = 1; i <= number; i++){
    sum= sum * i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
