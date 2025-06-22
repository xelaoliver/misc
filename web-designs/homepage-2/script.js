if (localStorage.getItem("username") == null) {
    let usernames = [["c64", "amiga500", "mac", "retro", "vector", "byte", "floppy", "disk0", "crt", "pdp's"], ["Wizard", "Guru", "Fan", "Nerd", "Hacker", "Coder", "Master", "64", "500", "OS"]];
  
    localStorage.setItem("username", usernames[0][Math.floor(Math.random()*usernames[0].length)].concat(usernames[1][Math.floor(Math.random()*usernames[1].length)]));
}

var cloud_chat = `${localStorage.getItem("username")} is visiting!<br>`;
var oldCloud_chat;

function send(text, pureText) {
if (pureText == "/clear") {
    document.getElementById("chat-container").innerHTML = null;
} else if (pureText.substring(0, 6) == "/user ") {
    let oldUsername = localStorage.getItem("username");
    localStorage.setItem("username", pureText.substring(6));
    cloud_chat = `${oldUsername} has changed their user to ${localStorage.getItem("username")}<br>`;
} else if (pureText.substring(0, 7) == "/image ") {
    cloud_chat = `${localStorage.getItem("username")}:<br><img src="${pureText.substring(7)}" alt="image sent by ${localStorage.getItem("username")}" style="max-width: 300px; max-height: 300px;"><br>`;
} else {
    cloud_chat = text;
}
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("text-input").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
        send(`${localStorage.getItem("username")}: ${document.getElementById("text-input").value.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}<br>`, document.getElementById("text-input").value.replace(/\</g,"&lt;").replace(/\>/g,"&gt;"));
    document.getElementById("text-input").value = null;
    document.getElementById('temp').style.opacity = "0";
        }
    })
})

setInterval(function () {
if (cloud_chat != oldCloud_chat) {
    document.getElementById("chat-container").innerHTML += `${cloud_chat}`;

    let scroll = document.querySelector('#chat-container');
    scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;
}
oldCloud_chat = cloud_chat;
}, 1000/15)
