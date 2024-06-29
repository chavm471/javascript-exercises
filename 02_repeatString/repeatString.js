const repeatString = function(string,num) {
    let temp = "";
    if (num < 0){
        return 'ERROR';
    }
    for(let i = 1;i <= num;++i){
        temp = temp + string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
