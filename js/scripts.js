//Business Logic
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
    } else if (number.toString().includes("3")) {
      return "Won't you be my neighbor?";
    } else {
      return number.toString();
    }
  });
};

//UI Logic
window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let numOutput = document.getElementById("user-number").value;
    let numOutputR = numberListFunc(numOutput);
    let numOutputList = numOutputR.join("\n• ").slice(1);
    document.querySelector("span#output").innerText = numOutputList;
    event.preventDefault();
  });
});
