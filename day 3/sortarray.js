const array = (nbr) => {
  let newarray = nbr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  return newarray;
};
console.log(array([30, 1, 2, 3, 4, 3, 2, 60, 10, -4]));
