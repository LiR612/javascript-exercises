const sumAll = function(firstVal, lastVal) {
    if(firstVal>lastVal){
        [firstVal, lastVal] = [lastVal, firstVal];
    }
    if(!Number.isInteger(firstVal) || !Number.isInteger(lastVal) || firstVal<0 ||lastVal<0){
        return "ERROR"
    }
    totalSum = (lastVal*(lastVal+1))/2 - ((firstVal-1)*((firstVal-1)+1))/2
    return totalSum;
};

//First choise is to create an array via loops then reduce()

// Do not edit below this line
module.exports = sumAll;
