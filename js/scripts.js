window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", ui);
})

function ui(e) {
  e.preventDefault();
  console.log("default prevented!")
}

