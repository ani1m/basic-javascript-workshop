// one line comment

/*
Write a function that takes a string and returns the first character of the string. 
Test your function on a few inputs, including the empty string.
*/

function firstCharacter(str) {
    return str.charAt(0);
}

console.log(firstCharacter("Ananadad"));

/*Write a function that takes a string and returns the last 
character of a string. Test your function on a few inputs, 
including the empty string. */

function lastCharacter(str) {
    return str.slice(-1);
}
console.log(lastCharacter("Ani"));



