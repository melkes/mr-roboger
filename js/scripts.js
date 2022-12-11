//Business Logic
function numberListFunc(number) {
  let numArray = [];
  for (let i = 0; i <=number; i++){
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
//UI Logic
window.addEventListener("load", function() {
  let userNum = document.getElementById('user-number');
  userNum.innerHTML = inputNumber.value;
  form.addEventListener("submit", number);
});

function results(event) {
  event.preventDefault();
  const userNum = document.getElementById('user-number');
  const result = numberListFunc(userNum.value);
  document.getElementById('output').innerHTML = result;
}


// window.addEventListener("load", function() {
//   document.querySelector("form#startGame").addEventListener("submit", addPlayers);
//   document.querySelector("button#roll").addEventListener("click", handleDiceRoll);
//   document.querySelector("button#hold").addEventListener("click", handleTotal);
//   document.querySelector("button#playAgainButton").addEventListener("click", handleReset);
//   // ...................("button#playComputer")...................("click", computerPlayer)
// });

// I think the biggest issue is that you need to add an event listener for when the window loads like: window.addEventListener("load", function() { ...... }). From within that event listener you can add any other event listeners, grab form data etc.
// UI logic

// document.querySelector("form#user-number").onsubmit = function (event) {
//   event.preventDefault();
//   let userNum = document.getElementById("user-number").value;

//   document.getElementById("output").innerText = userNum;
// };