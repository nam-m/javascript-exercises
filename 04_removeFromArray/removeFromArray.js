const removeFromArray = function(arr, ...args) {
    for (const arg of args)
        for (const item of arr)
            if (item === arg)
                arr.splice(arr.indexOf(item), 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
