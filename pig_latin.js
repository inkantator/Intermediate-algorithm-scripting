/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.*/

function translatePigLatin(str) {

if (str[0].match(/^[aeiou]/) !== null) {
    return str + "way"
} else {
    var beginning = str.match(/^[^aeiou]+/);
    var indexFoundEnd = beginning[0].length;
    middle = str.substring(indexFoundEnd);
    return middle + beginning + "ay";
}

}

console.log(translatePigLatin("rhythm"));
