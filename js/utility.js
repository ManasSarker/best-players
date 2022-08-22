function addPlayerName(name) {
  const players = document.getElementById("player-list");
  let newPlayersList = document.createElement("li");
  newPlayersList.textContent = name;

  players.appendChild(newPlayersList);
}

function checkList() {
  var element = document.getElementById("player-list"),
    numElements = element.getElementsByTagName("li").length;

  if (numElements == 5) {
    alert("You can not add more than five");
  }
}
