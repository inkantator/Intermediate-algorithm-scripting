/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
let charTable = [...str].map(letter => letter.charCodeAt());

    for (let i = 0; i < charTable.length; i++) {
        let difference = charTable[i + 1] - charTable[i];
        if (difference == 2) return String.fromCharCode(charTable[i]+1);;
    }
    return undefined
}
console.log(fearNotLetter("abce"));






