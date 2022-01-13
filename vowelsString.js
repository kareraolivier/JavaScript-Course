//count vowel in a iven string

//
function vowelcount(str) {
  var count = 0;
  var vowels = "iuoae";

  for (var nbr = 0; nbr < str.length; nbr++) {
    if (vowels.indexOf(str[nbr]) > -1) {
      count++;
    }
  }
  return count;
}
console.log(
  vowelcount(
    "i have faired but i am asking a small \
    chance to proceed becouse i am a good learn \
    i won't disappoint you"
  )
);

//.......................................................................

str = "chance to proceed becouse i am a good learn ";
var count = 0;
var vowels = "iuoae";

for (var nbr = 0; nbr < str.length; nbr++) {
  //   console.log(str[nbr]);
  if (vowels.indexOf(str[nbr]) > -1) {
    count++;
  }
}
console.log(count);

// removing vowels

var str = "hey there i am a person";
var vowels = /[aeiou]/g;
var array1 = str.split("");
console.log(array1);
var array2 = str.match(vowels);
console.log(array2);
console.log(array2.length);

//............................................
// javascript string first letter uppercase

var str = "my name is nkurunziza karera olivier";
var str2 = str.split(" ");
console.log(str2.length);
// var str3 = str2.replace(str2.charAt(0), str2.charAt(0).toUpperCase());
// console.log(str3);
for (var i = 0; i <= str2.length; i++) {
  i.split(" ");
  console.log(i);
  //   var upper = str3.replace(str3.indexOf(0), str3.indexOf(0).toUpperCase());
}
console.log(upper);
