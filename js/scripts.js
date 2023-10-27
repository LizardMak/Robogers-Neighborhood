window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", ui);
})

function ui(e) {
  e.preventDefault();
  const userInput = document.getElementById("roboSpeak").value;
  console.log(userInput);
}

