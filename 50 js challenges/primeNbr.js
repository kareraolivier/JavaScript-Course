const primeNbr = (nbr) => {
  let prime = true;
  if (nbr === 1) {
    console.log("not a prime nbr");
  } else if (nbr > 1) {
    for (let i = 2; i < nbr; i++) {
      if (nbr % i == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(nbr, "is prime");
    } else {
      console.log(nbr, "not prime");
    }
  }

  return nbr;
};
primeNbr(4);
