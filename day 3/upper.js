const uppercase = (name) => {
  let newname = name.toLowerCase().split(" ");
  // newname;
  for (let i = 0; i < newname.length; i++) {
    newname[i] = newname[i].charAt(0).toUpperCase() + newname[i].slice(1);
  }

  return newname;
};
console.log(uppercase("i lOve jeSus"));

const vowel = (name) => {
  let newname = name.toLowerCase().split("");
  let vowels = ["a", "e", "i", "u", "o"];
  for (let i = 0; i < newname.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
      newname[i] == vowels[v]
        ? (newname[i] = newname[i].toUpperCase())
        : newname[i].toLowerCase();
    }
  }

  return newname.join(" ");
};
console.log(vowel("i lOve jeSus"));

const convert = (str) => {
  return str
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()),
      ""
    );
};

console.log("Result is", convert("Learn programming and start earning"));

0;

const vowelsCAP = (str) => {
  var str;
  var res = str.split("");
  for (var i = 0; i < res.length; i++) {
    if (
      res[i] == "A" ||
      res[i] == "E" ||
      res[i] == "I" ||
      res[i] == "O" ||
      res[i] == "U"
    ) {
      res[i] = res[i];
    } else if (
      res[i] == "a" ||
      res[i] == "e" ||
      res[i] == "i" ||
      res[i] == "o" ||
      res[i] == "u"
    ) {
      res[i] = res[i].toUpperCase();
    } else {
      res[i] = res[i].toLowerCase();
    }
  }
  var out = res.join("");
  return out;
};
console.log(vowelsCAP("HI Bro, Learn programming and start earning"));
