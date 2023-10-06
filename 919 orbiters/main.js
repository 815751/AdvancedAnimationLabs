
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let movers = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMoverss(200);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runMovers();   // run movers
    requestAnimationFrame(animate); // next cycle
}

function loadMoverss(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = Math.random() * 6 - 3;
        let dy = Math.random() * 6 - 3;
        let d = Math.random() * 5 + 5;
        movers[i] = new Mover(x, y, dx, dy, 15);
    }
    attr = new Mover(0, 0, 20, false);
}

// move the circle to a new location
function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}

