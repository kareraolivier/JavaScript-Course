const arrayOfNbr = (str) => {
  let name = {};

  let strin = str.split("");

  for (const element of strin) {
    if (name[element]) {
      name[element] += 1;
    } else {
      name[element] = 1;
    }
  }
  return name;
};
console.log(arrayOfNbr("karera"));

const newname = (str) => {
  let myname = {};
  let mystr = str.split("");
  for (let element of mystr)
    !myname[element] ? (myname[element] = 1) : myname[element]++;
  return myname;
};

console.log(newname("imana niyo nkuru"));
