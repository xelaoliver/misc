// html: analog clock:<br><canvas width="250" height="250" id="canvas"></canvas>

const ctx = document.getElementById("canvas").getContext("2d");
const strokeRadius = 2.5;

window.addEventListener("load", (e) => {
    ctx.lineWidth = strokeRadius;
    ctx.font = "13px Times New Roman";

    clock(); setInterval(clock, 1000);
});

function clock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let date = new Date();
    let time = {};
    if (date.getHours() > 12) {
        time = {hours: date.getHours()-12}
    } else {
        time = {hours: date.getHours()}
    }

    time.minutes = date.getMinutes();
    time.seconds = date.getSeconds();

    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2-strokeRadius, Math.PI*2, 0);
    ctx.strokeStyle = "#000"; ctx.stroke();

    function drawHand(length, radian, colour) {
        ctx.beginPath();
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.lineTo(canvas.width/2+length*Math.cos(radian), canvas.height/2+length*Math.sin(radian));
        ctx.strokeStyle = colour; ctx.stroke();
    }

    for (let i = 1; i <= 12; i ++) {
        ctx.fillText(i, canvas.width/2+100*Math.cos((i*30)*Math.PI/180-Math.PI/2)-ctx.measureText(i).width/2, canvas.height/2+100*Math.sin((i*30)*Math.PI/180-Math.PI/2));
    }

    drawHand(canvas.width/2-25, (time.seconds*6)*Math.PI/180-Math.PI/2, "#FF0000"); // second
    drawHand(canvas.width/2-25, (time.minutes*6)*Math.PI/180-Math.PI/2, "#000"); // minute
    drawHand(canvas.width/2-50, (time.hours*30)*Math.PI/180-Math.PI/2, "#000"); // hour
}
