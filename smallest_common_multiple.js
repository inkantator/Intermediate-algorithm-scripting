/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = [];
    for (min; min <= max; min++){
        range.push(min);
    }
    const lowestCommon = (currentValue) => n % currentValue === 0;
    let common = false;
    let n = max * (max - 1);
    common = range.every(lowestCommon);
  
    while (common == false) {
        n++;
        common = range.every(lowestCommon);
    }
    return n;
}

console.log(smallestCommons([2,10]));

// arr = [1, 5]
// console.log(Math.min(...arr));