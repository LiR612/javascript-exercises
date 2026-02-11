const getTheTitles = function(arr) {
    const titleArr = arr.map(book => {
        return book.title; // curly braces must have return
    })
    return titleArr;

};

// Do not edit below this line
module.exports = getTheTitles;
