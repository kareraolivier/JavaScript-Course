// counting string vowels
//karera
//olivier
function countVowels(str) {
  var vowels = "iuoae";
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("nkurunziza"));

//string making first letter capital

//i am a boy

function capitalLetter(str) {
  var capital = str.toLowerCase().split(" ");
  var result = capital.map(function (letter) {
    return letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
console.log(capitalLetter("i aM a boY"));

function vowels(str) {
  var array2 = /[iuoae]/g;
  var array1 = str.split();
  //   console.log(array1);
  var result = str.match(array2);
  return result.join(" ");
}

console.log(vowels("karerasusu"));

// display the logest string

function longestStrin(str) {
  var resul = 0;
  var arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (resul < arr[i].length) {
      resul = arr[i].length;
    }
  }

  return resul;
}
console.log(longestStrin("nku susu hozana dan nkurunziz"));

function longestString(str) {
  var result = "";
  var arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }

  return result.replace(result.charAt(0), result.charAt(0).toUpperCase());
}
console.log(longestString("nku susu hozana dan nkurunziza"));

function data(str) {
  var show = str.split(" ");
  show.sort(function (a, b) {
    return b.length - a.length;
  });
  return show[0];
}
console.log(data((str = "javascript is my favourite language ")));
