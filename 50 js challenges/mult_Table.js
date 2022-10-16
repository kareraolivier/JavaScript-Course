function multplicationTable() {
  for (var nbr = 1; nbr <= 12; nbr++) {
    for (var Number = 1; Number < 13; Number++) {
      console.log(nbr + " * " + Number + " = " + Number * nbr);
    }
    console.log("\n");
  }
}
multplicationTable();
