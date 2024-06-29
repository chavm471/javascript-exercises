const fibonacci = function(num) {
    let firstNumber = 0, secondNumber = 1;
    let totalSum = 0;
    let number = num;
    if(!Number.isInteger(num)){
        number = parseInt(num);
    }

    if(number < 0){
        return "OOPS";
    }
    
    //returns if its lower than 1 or 1
    if(number <= 1){
        return number;
    }

    //create 
    for(let i = 2;i <= number; ++i){

        totalSum= firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = totalSum;
    }
    return totalSum;
};
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
