function greet() {
  console.log("hello karera");
}
greet();

function greetPerson(name, lastName) {
  console.log("hello" + " " + name + " " + lastName);
}
greetPerson("olivier"); //lastName become undefined here
greetPerson("suusu", "petit");
