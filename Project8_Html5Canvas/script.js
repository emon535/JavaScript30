(function getConsolePrint() {
    console.log("Hello from Console")
})();

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrwaing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {


    if (!isDrwaing) return;
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if (hue > 360) hue = 0;

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }


    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    lastX = e.offsetX;
    lastY = e.offsetY;
    isDrwaing = true
})
canvas.addEventListener('mouseup', () => {
    ctx.lineWidth = 0;
    isDrwaing = false
})
canvas.addEventListener('mouseout', () => isDrwaing = false)