function evenNumber() {
  var sum = 0;
  for (var nbr = 10; nbr < 31; nbr++) {
    if (nbr % 2 == 0) {
      sum += nbr;
      //   console.log(nbr);
    }
  }
  console.log("sum is:" + sum);
}
evenNumber();
