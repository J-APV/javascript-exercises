const removeFromArray = function(array, ...targets) {
    for(let target of targets){
        if(typeof(target) != typeof(array[array.indexOf(target)])){
            continue;
        }
            let position = array.indexOf(target);
            if(position === -1){
                continue;
            }else{
                while(position != -1){
                    array.splice(position,1);
                    position = array.indexOf(target);
                 }
            }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
