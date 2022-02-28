/*Steamroller
Flatten a nested array. You must account for varying levels of nesting. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.*/

function steamrollArray(arr) {
  return  arr.reduce((acc, val) => 
            Array.isArray(val) ? 
            acc.concat(steamrollArray(val)) :
            acc.concat(val), []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//[ 1, 2, 3, 4 ]