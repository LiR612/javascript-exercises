const palindromes = function (inputStr) {
    const punctuationlessString = inputStr.replace(/[^a-zA-Z0-9\s]/g, "");
    const finalStr = punctuationlessString.replace(/\s+/g, "").toLowerCase();
    
    let j = finalStr.length - 1;
    for(let i=0; i<finalStr.length / 2; i++){
        if (finalStr[i]!= finalStr[j]){
            return false;
        }
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
