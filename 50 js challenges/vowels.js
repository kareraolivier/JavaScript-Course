const vowels = (name) => {
  let myVowels = /[uoiae]/g;
  let myarrays = "iuoae";
  let array = name.split("");
  // let cou = 0;
  // for (let i = 0; i <= array.length; i++) {
  //   if ((array[i] = myVowels[i])) {
  //     cou++;
  //   }
  // }
  let count = name.match(myVowels);
  return count.length;
};
console.log(vowels("nkurunziza karera olivier"));
