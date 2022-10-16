const positiveArrays = () => {
  let array = [1, 2, 3, 4, -3, -1];
  let array2 = [];
  for (let i = 0; i <= array.length; i++) {
    let nbr = array[i];
    if (nbr > 0) {
      array2 = [nbr, ...array2];
    }
  }
  console.log(array2);
};

positiveArrays();
