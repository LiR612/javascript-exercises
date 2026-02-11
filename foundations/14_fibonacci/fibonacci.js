const fibonacci = function(index) {
    if(index<0)return "OOPS";
    if(index==0)return 0;
    let prev = 0;
    let curr=1;
    for(let i=2; i<=index; i++){
        let next = curr + prev;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
