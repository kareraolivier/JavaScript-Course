const fibonacci = () => {
  let nbr = 10;
  let n1 = 0,
    n2 = 1,
    nextNbr;
  for (let i = 0; i <= nbr; i++) {
    console.log(n1);
    nextNbr = n1 + n2;

    n1 = n2;
    n2 = nextNbr;
  }
};
fibonacci();
