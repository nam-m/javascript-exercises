const fibonacci = function(num) {
    if(typeof(num) == 'string') num = parseInt(num);
    if (num < 0) return 'OOPS';
    if (num === 0) return num;
    if (num == 1 || num == 2) return 1;
    
    let arr = Array(num);
    arr.fill(1)
       .map((current, index, currentArray) => {
           if (index >= 2) {
              currentArray[index] = arr[index - 1] + arr[index - 2];
              console.log('Current value: ', current);
           }
        });
    console.log(arr);
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
