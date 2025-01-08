// requires the html canvas api with and id of "canvas"

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function traject(x, angle, accelerationOnGravity, initialVelocity) {
    return x*Math.tan(angle)-(accelerationOnGravity*Math.pow(x, 2))/(2*Math.pow(initialVelocity, 2)*Math.pow(Math.cos(angle), 2));
}

addEventListener("mousemove", (e) => {
    var x = 0;
    var angle = Math.PI-Math.atan2(e.pageY-canvas.height/2, e.pageX-canvas.width/2);
    console.log(angle);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    while (true) {
        const y = canvas.height/2-traject(x, angle, 9.8, 100);
        ctx.lineTo(x+canvas.width/2, y);

        if (y > canvas.height) {
            break;
        } else {
            x ++;
        }
    }
    ctx.stroke();
});
