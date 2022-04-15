const sumAll = function(start, end) {
    outer: if (typeof(start) == 'number' && typeof(end) == 'number') {
        if (start < 0 || end < 0)
            break outer;
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }

        /* Normal way
           -------------------------------------------*/
        // let sum = 0;
        // for (let i = start; i <= end; i++)
        //     sum += i;
        // return sum;

        /* Smart way
           -------------------------------------------*/
        return (end - start + 1) * (start + end) / 2;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
