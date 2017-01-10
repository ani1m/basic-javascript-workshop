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
console.log(addTwoNum("p", 3));

/*Write a function that takes two numbers and multiplies them 
together. Test your function on a few inputs. 
Write in your comments what happens when you pass something other 
than a number to your function.*/

function multiply (a,b) {
    return a * b;
}
console.log(multiply(3,4));
console.log(multiply("p",4)); // returns NaN

/*Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. 
If the string is ‘div’, return the ratio. 
Otherwise return 0.*/

function numberString(a,b,str) {
    if(str === "add") {
        return a + b;
    }
    else if(str === "subtract") {
        return a - b;
    }
    else if(str === "mult") {
         return a * b;
    }
    else if(str === "div") {
         return a / b;
    } else {
        return 0;
    }
}
    
    console.log(numberString(3,5, "mult"));
    
        
  
 
  
