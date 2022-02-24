// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
//pattern = /[A-Z](?=[A-Z][a-z])|[A-Za-z][a-z]+/g
 //return str.match(pattern).join("-").toLowerCase();
   return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
}

console.log(spinalCase("This_Is_Spinal__Tap"));


//this-is-spinal-tap

