window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", ui);
})

function ui(e) {
  e.preventDefault();
  const userInput = document.getElementById("roboSpeak").value;
  const userNumbers = numberGenerator(userInput);
}

function numberGenerator(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    let pushNumber = index
    numArray.push(pushNumber);
  }
  console.log(numArray);
}