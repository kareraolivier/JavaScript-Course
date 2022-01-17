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
