function reverseString(reverse) {
  var spl = reverse.split("");
  var Rev = spl.reverse();
  var reversedString = Rev.join("");
  return reversedString;
}
console.log(reverseString("karera").toUpperCase());

//......................................................

function reverseNewString(strings) {
  var newString = "";
  //   var kar = strings.length;
  //   console.log(kar);
  for (var i = strings.length - 1; i >= 0; i--) {
    newString = newString + strings[i];
  }

  return newString;
}
console.log(reverseNewString("kareraolivier"));

function greet() {
  console.log("message");
}
greet();
