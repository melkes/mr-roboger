function numberListFunc(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray.map(function (number) {
    if (number.toString().includes("1")) {
      return "Beep!";
    } else if (number.toString().includes("2")) {
      return "Boop!";
    } else {
      return number;
    }
  });
}
