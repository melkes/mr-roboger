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
    } else if (number.toString().includes("3")){
      return "Won't you be my neighbor?";
    } else {
      return number;
    }
  });
}

// UI logic

document.querySelector("form#user-number").onsubmit = function (event) {
  event.preventDefault();
  let userNum = document.getElementById("user-number").value;

  document.getElementById("output").innerText = userNum;
};

