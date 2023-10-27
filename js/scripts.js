window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", ui);
})

function ui(e) {
  e.preventDefault();
  clearPage();
  const userInput = document.getElementById("roboSpeak").value;
  const userNumbers = numberGenerator(userInput);
  const robogerReaction = beepBoopGenerator(userNumbers);
  const ul = document.getElementById("mrRoboger");
  robogerReaction.forEach((number) => {
    let li = document.createElement("li");
    li.setAttribute("class", "green")
    li.innerText = number;
    ul.append(li);
  })


}

function numberGenerator(userInput) {
  let numArray = [];
  for (let index = 0; index <= userInput; index++) {
    let pushNumber = index
    numArray.push(pushNumber);
  }
  return numArray;
}

function beepBoopGenerator(userNumbers) {
  let newArray = [];
  for (let i = 0; i < userNumbers.length; i++) {
    let currentCheck = userNumbers[i].toString();
    if (currentCheck.includes("3")) {
      newArray.push("Won't you be my neighbor?");
    } else if (currentCheck.includes("2")) {
      newArray.push("Boop!")
    } else if (currentCheck.includes("1")) {
      newArray.push("Beep!")
    } else {
      newArray.push(currentCheck);
    }
  }
  return newArray;
}

function clearPage() {
  const removeThis = document.getElementById("mrRoboger");
  while (removeThis.firstChild) {
    removeThis.removeChild(removeThis.firstChild)
  }
} 