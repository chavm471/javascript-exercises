const leapYears = function(year) {
    //first check is for century years
    //if it goes past this check it means its not a century year
    if(year % 4 == 0 && year % 100 == 0){
        if (year % 400 == 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    //check any other year besides a century year
    if(year % 4 == 0){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
