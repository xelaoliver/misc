// bulletin code

var bulletin = document.getElementById("bulletin-container");
const bulletinData = [
  {
    "title": "New UI Update",
    "description": "The old UI was lacking, so I remade it!",
    "date": "15-02-2025"
  },
  {
    "title": "How 8-bit CPUS access 64k of RAM",
    "description": "They use 16-bit addresses!",
    "date": "14-02-2025"
  },
  {
    "title": "3D Rendering engine in JS",
    "description": "See my github for more information.",
    "date": "26-11-2024"
  },
  {
    "title": "Neocities or Github?",
    "description": "Should I host this on github (a service I already use) or neocities (a better service for site hosting)?",
    "date": "12-09-2024"
  }
]

for (let i = 0; i < bulletinData.length; i ++) {
  bulletin.innerHTML +=`<span style="color: #ff4c4c;">${bulletinData[i].title}</span> · ${bulletinData[i].date}<br><div style="color: #666;">${bulletinData[i].description}</div><br>`;
}

// chatroom code

if (localStorage.getItem("username") == null) {
  let usernames = [["c64", "amiga500", "mac", "retro", "vector", "byte", "floppy", "disk0", "crt", "pdp's"], ["Wizard", "Guru", "Fan", "Nerd", "Hacker", "Coder", "Master", "64", "500", "OS"]];

  localStorage.setItem("username", usernames[0][Math.floor(Math.random()*usernames[0].length)].concat(usernames[1][Math.floor(Math.random()*usernames[1].length)]));
}

var cloud_chat = `<span style="color: #666;">${localStorage.getItem("username")}</span> is visiting!<br>`;
var oldCloud_chat;

function send(text, pureText) {
  if (pureText == "/clear") {
    document.getElementById("chat-container").innerHTML = null;
  } else if (pureText.substring(0, 6) == "/user ") {
    let oldUsername = localStorage.getItem("username");
    localStorage.setItem("username", pureText.substring(6));
    cloud_chat = `${oldUsername} has changed their user to ${localStorage.getItem("username")}`;
  } else if (pureText.substring(0, 7) == "/image ") {
    cloud_chat = `${localStorage.getItem("username")}:<br><img src="${pureText.substring(7)}" alt="image sent by ${localStorage.getItem("username")}" style="max-width: 300px; max-height: 300px;"><br>`;
  } else if (pureText == "/info") {
    document.getElementById("chat-container").innerHTML += "Information: A chatroom has been an essential part of this website since 07-06-2024, so may this still continue! I nor this website is liable to any damage, consequences or anything as this is just an chatboard with no rules, created for a hobbyist project.<br>";
  } else {
    cloud_chat = text;
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("text-input").addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
		send(`<span class="grey">${localStorage.getItem("username")}:</span> ${document.getElementById("text-input").value.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}<br>`, document.getElementById("text-input").value.replace(/\</g,"&lt;").replace(/\>/g,"&gt;"));
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

// projects
/*
const oldProjectData = [
  {
    "title": "Chatboard in HTML",
    "description": "This proved to be really good for my friends to communicate from different classes!",
    "date": "07-06-2024",
    "url": "https://xelaoliver.github.io/chat"
  },
  {
    "title": "Morse Code Decoder",
    "description": "Type with only 2 keys (and backspace/new character) with this single page!",
    "date": "08-01-2025",
    "url": "https://xelaoliver.github.io/morse-code"
  },
  {
    "title": "Brainfuck interpreter",
    "description": "LOL, funny language. Seriously, this is really cool.",
    "date": "15-11-2024",
    "url": "https://xelaoliver.github.io/brainfuck"
  },
  {
    "title": "Nipkow Disk Simulator",
    "description": "Wrote this simulator to see how to make a nipkow disk camera, that project is on the backburner.",
    "date": "19-12-2024",
    "url": "https://xelaoliver.github.io/nipkow-disk"
  },
  {
    "title": "Scratch Programming",
    "description": "This is what kinda got me into programming, it was a cool tool and it's usefull for conventions where you have to program in scratch although I think I took it a bit too far.",
    "date": "about 2020",
    "url": "https://scratch.mit.edu/users/AlexAteThat/"
  },
  {
    "title": "xelaoliver.github.io",
    "description": "I first imagined this website to be somewhere I regually update, I didn't know javascript or CSS, just a bit of HTML i learnt off the internet. Look at what it is now!",
    "date": "27-05-2024",
    "url": "https://xelaoliver.github.io"
  }
]

const githubProjectData = [
  {
    "title": "3D in Javascript",
    "description": "I didn't want to learn three.js so I made my own! This works although its janky and I really can't be bothered to extend this project more.",
    "date": "26-08-2024",
    "url": "https://github.com/xelaoliver/3d2"
  },
  {
    "title": "Analog clock in Javascript",
    "description": "I remember making this very quickly, it was a cool project using the HTML canvas API and date.now",
    "date": "30-01-2024",
    "url": "https://github.com/xelaoliver/misc/blob/main/analog-clock.js"
  },
  {
    "title": "Capitalism Multiplayer Monopoly in Javascript",
    "description": "I had big plans for this, I got the 3D board and houses to kinda work aswell as the street information and cards, i'm 'working' on the server.",
    "date": "16-01-2025",
    "url": "https://github.com/xelaoliver/3d2/blob/main/monopoly.js"
  },
]

var projects = document.getElementById("old-contents");

for (let i = 0; i < oldProjectData.length; i += 3) {
  projects.innerHTML += `<tr>
              <td width="33%"><a href="${oldProjectData[i].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${oldProjectData[i].title}</span><br><span style="color: black">${oldProjectData[i].date}</span><br><br><div style="text-align: left;">${oldProjectData[i].description}</div>
              </a></div></td>
              <td width="33%"><a href="${oldProjectData[i+1].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${oldProjectData[i+1].title}</span><br><span style="color: black">${oldProjectData[i+1].date}</span><br><br><div style="text-align: left;">${oldProjectData[i+1].description}</div>
              </a></div></td>
              <td width="33%"><a href="${oldProjectData[i+2].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${oldProjectData[i+2].title}</span><br><span style="color: black">${oldProjectData[i+2].date}</span><br><br><div style="text-align: left;">${oldProjectData[i+2].description}</div>
              </a></div></td>
              </tr>`;
}

projects = document.getElementById("github-contents");

for (let i = 0; i < oldProjectData.length; i += 3) {
  projects.innerHTML += `<tr>
              <td width="33%"><a href="${githubProjectData[i].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${githubProjectData[i].title}</span><br><span style="color: black">${githubProjectData[i].date}</span><br><br><div style="text-align: left;">${githubProjectData[i].description}</div>
              </a></div></td>
              <td width="33%"><a href="${githubProjectData[i+1].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${githubProjectData[i+1].title}</span><br><span style="color: black">${githubProjectData[i+1].date}</span><br><br><div style="text-align: left;">${githubProjectData[i+1].description}</div>
              </a></div></td>
              <td width="33%"><a href="${githubProjectData[i+2].url}"><div class="box" style="text-align: center; height: 175px;">
                <span style="color: #ff4c4c;">${githubProjectData[i+2].title}</span><br><span style="color: black">${githubProjectData[i+2].date}</span><br><br><div style="text-align: left;">${githubProjectData[i+2].description}</div>
              </a></div></td>
              </tr>`;
}
*/