// srting primitive
const message = "hi karera";
message.replace(/hi/, "he");
console.log(message);
if (message.startsWith("he")) {
  console.log("yes it is true 'hi' :" + message);
} else {
  console.log('false you \n "are liying"');
}

//string object
const another = new String("hello");
console.log(another);

var mainString = "ishimwe";
subString = "himw";
console.log(mainString.includes(subString)); //first way with ES6
console.log(mainString.indexOf(subString) !== -1); // second with sub index values

//...........................................................
// making first letter capital letter

function capitalLetter(str) {
  return str.replace(/\w\S*/g, function (sentence) {
    // console.log(str);
    return sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase();
  });
}
console.log(capitalLetter("how are you karera?"));

let longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longString);
