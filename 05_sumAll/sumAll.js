const sumAll = function(start, end) {
    let sum = 0;
    // if(typeof(start) != 'number' || typeof(end) != 'number'){
    //     return "ERROR";

    // }
    if(start >= 0 && end >= 0 && Number.isInteger(start) === true && Number.isInteger(end) === true){
        if(start >  end){
            let temp = start;
            start = end;
            end = temp;
        }
        for(let i = start; i <= end; i++){
            sum += i;
        }
    }else{
        return "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
