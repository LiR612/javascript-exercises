const removeFromArray = function(arr, ...valsToRemove) {
    const cleanedArr = arr.filter((value)=> !valsToRemove.includes(value));
    return cleanedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
