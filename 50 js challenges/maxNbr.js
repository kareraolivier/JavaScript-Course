const maxArray = () => {
  let max = [1, 5, 2, 9, 0, 2, 1];
  let maxNbr = 0;
  for (i = 0; i <= max.length; i++) {
    if (maxNbr < max[i]) {
      maxNbr = max[i];
    }
  }
  console.log(maxNbr);
};
maxArray();
