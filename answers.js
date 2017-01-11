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
    
 /*Write a function that takes a string and a number, 
 and returns the string repeated that many number of times. 
 Test your function with various inputs.  
 */
 
 function repeat (str, n) {
    var answer = "";
    
    for(var i = 0; i < n; i++) {
        answer += str;
    }
    return answer;
 }
 
console.log(repeat("hanky", 3));

/*Write a function that uses a for loop to print 
the numbers from 1 to 10 inclusively. */

function loop () {
    var counter= "";
    for (var i = 1; i <= 10; i++) {
        counter += i;
    }
    return counter;
}
console.log(loop());

/*Write a function that uses a for loop to print the numbers 
from 1 to 10 inclusively, but as words ("one", "two", …). 
As an extra challenge, try to find a solution 
that does not use an if/else: */

function inWords() {
    var arr =[];
    var words = ['one','two', 'three', 'four','five', 'six', 
    'seven', 'eight', 'nine', 'ten'];
    for(var i = 0; i < 10; i ++) {
       arr.push(words[i]);
    }
    return arr.join(); // return the array into a string
}
console.log(inWords());

/*Write a function that uses a for loop to print the numbers 
from 1 to 10 inclusively, but for each number, 
print it that many number of times:*/

function numberTimes() {
    var counter = '';
    for(var i = 1; i <= 10; i++) {
        counter += i;
     for (var j = 1; j <= counter.length; j++ ) {
        if( i > j) {
            counter += i;
        }
        }
    }
    return counter;
}
console.log(numberTimes());

/*Write a function that takes a string, and returns 
the reverse of that string. For example, 
if you pass the function the string “hello”, 
it should return “olleh”. 
Test your function on a few inputs, including the empty string.*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello and Goodbye"));
console.log(reverseString("helicopter"));

/*Write a function that takes a number and 
returns the factorial of a number. 
The factorial of 5 is 5x4x3x2x1. 
The factorial of 0 is 1. 
Test your input on a few numbers, including negative numbers.*/

function factorial(n) {
    if( n === 0) {
        return 1;
    } 
    else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));
console.log(factorial(6));

/*Write a function that takes a phrase as a string, 
and returns the longest word in that phrase. 
If the phrase contains more than one such word, 
return the first occurrence. 
Test your function on a few inputs.*/

function longestWord(str) {

    var splitArray = str.split(' ');
    var longestWord = '';

    for (var i = 0; i < splitArray.length; i++) {

        if (splitArray[i].length > longestWord.length) {
            longestWord = splitArray[i];
        }

    }

    return longestWord;
}

console.log(longestWord('Last man standing'));
console.log(longestWord('Superduper hi bye'));

/*Write a function that takes a phrase, and returns the same 
phrase with every word capitalized. For example, if you pass your 
function "hello world", it should return “Hello World” and if you 
pass it “HELLO WORLD” or even "HeLLo WoRLD", it will also return 
"Hello World". Test your function of a few inputs.*/

function letterCapitalize(str) { 
 
  var words = str.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
         
}
   
console.log(letterCapitalize("hello world from montreal"));
console.log(letterCapitalize("kAelee and anaYis and fRiendS"));


    




  