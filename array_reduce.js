// array reduce

const number = [1, -3, 5, 7, 3];
let sum = 0;
for (let n of number) {
  sum += n;
}
console.log(sum);
const sam = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// to reduce the code we can remove the initial value "0"
console.log(sam);
