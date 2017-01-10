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

/*Write a function that takes a string and a number, 
and returns the character at the position represented 
by the number. The indexing of number should start at 0. 
Test your function on a few inputs, including the empty string. */

function stringNum (str, num) {
    return str.charAt(num);
}
console.log(stringNum("Decode", 3));
console.log(stringNum("github", 2));

/*Write a function that takes two numbers and adds them together. 
Test your function on a few inputs. Write in the comments what 
happens when you pass something other than a number to your 
function. */

function addTwoNum (a,b) {
    return a + b ;
}
console.log(addTwoNum(3,5));
console.log(addTwoNum(10,20));
