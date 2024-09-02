const reverseString = function(word) {
    //car --> rac
    let reversedString = '';
    for(let i = 1; i < word.length; i++){
        reversedString = word.slice(1, word.length).concat(word.at(i-1));
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
