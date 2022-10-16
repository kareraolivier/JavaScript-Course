// 20 string methods

var stringOne = "K arera Is a Good person";
var stringTwo = " he likes people. ";
let srtingthree = "Dood";

// charAt
console.log(stringOne.charAt(2)); // a

//charCodeAt
console.log(stringOne.charCodeAt(3));

// concat
console.log(stringOne.concat(stringTwo));

//fromCharCode
console.log(String.fromCharCode(109));

//includes
console.log(stringTwo.includes("likes"));
// console.log(stringTwo.includes(stringThree));
//indexOf & lastIndexOf
console.log(stringTwo.indexOf("e"));
console.log(stringTwo.lastIndexOf("e"));

//match
console.log(stringOne.match(/o/g));

//repeat
console.log(stringTwo.repeat(5));

//replace
console.log(stringOne.replace(/is/g, "isis"));

//search
console.log(stringOne.search("is"));

// slice
console.log(stringOne.slice(4, 15));

//split
console.log(stringOne.split(" "));

//toUpperCase
console.log(stringOne.toLowerCase());

//toLowerCase
console.log(stringOne.toUpperCase());

//trim
let stringThree = "hello people";
console.log(stringThree.trimStart());
console.log(stringThree.trim());
console.log(stringThree.trimEnd());

let a = "c";
let b = "b";
console.log(a.charCodeAt(a));
console.log(a.charCodeAt(b));
if (a > b) {
  console.log(a + " is greater than " + b);
} else if (a < b) {
  // true
  console.log(a + " is less than " + b);
} else {
  console.log(a + " and " + b + " are equal.");
}
