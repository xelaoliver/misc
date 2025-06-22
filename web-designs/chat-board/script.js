function randomId() {
	return Math.floor(Math.random()*(999-100)+100);
}

if (localStorage.getItem("username") == null) {
	localStorage.setItem("username", "guest");
}

if (localStorage.getItem("rank") == null) {
	localStorage.setItem("rank", "regular");
}

const ranks = {"regular": "#21cc98", "operator": "#74c0fc", "mayor": "#ffd43a"}
var cloud_chat = randomId()+localStorage.getItem("username")+" has joined the chat board!"; var old_cloud_chat;


document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("text-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      send();
    }
  })
})

function display(string) {
  document.getElementById("chat").innerHTML = string+"<br>"+document.getElementById("chat").innerHTML;
}

function send() {
  let input = document.getElementById("text-input").value;
	document.getElementById("text-input").value = null;

  if (input.substring(0, 1) == "/") {
    let command = input.substring(1);

    if (command == "help") {
      cloud_chat = "- /user <br> - /clear <br> - /theatre youtube video url";
    }
  } else {
    cloud_chat = randomId()+localStorage.getItem("username")+": "+input;
  }
}

function main() {
  document.getElementById("time").innerHTML = new Date().toLocaleString();
  document.getElementById("rank").innerHTML = '<span style="color: '+ranks[localStorage.getItem("rank")]+'">regular</span>';
  document.getElementById("username").innerHTML = localStorage.getItem("username");

  if (old_cloud_chat != cloud_chat) {
    display(cloud_chat.substring(3));
  }

  old_cloud_chat = cloud_chat;
}

setInterval(function () {main()}, 10);
