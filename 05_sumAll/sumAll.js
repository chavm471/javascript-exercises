const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let largeNum = 0;
    let lowNum = 0;

    if(num1 < num2){
        largeNum = num2;
        lowNum = num1;
    }
    else{
        largeNum = num1;
        lowNum = num2;
    }
    let sum = 0;
    for(let i = lowNum; i <= largeNum;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
