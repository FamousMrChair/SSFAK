// Team GASLIGHTING GATEKEEPING GIRLBOSSES :: Kevin Xiao + Aden Garbutt
// SoftDev pd7
// K31 -- canvas based JS drawing
// 2023-04-25m

var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

ctx.fillStyle = "red";

var requestID; 

var clear = (e) => {
    ctx.clearRect(0,0,c.width,c.height);
}

var radius = 0;
var growing = true;
var animating = false;

var drawDot = (e) => {
    if (e.type == "click" && animating) {
        return
    }
    animating = true;
    clear();
    
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    if (growing == true){
        radius += 1;
    }
    else {
        radius -= 1;
    }
    if (radius > c. width / 2){
        growing = false;
    }
    if (radius == 0){
        growing = true;
    }
    requestID = window.requestAnimationFrame(drawDot);
}

var stopIt = function() {
    window.cancelAnimationFrame(requestID);
    animating = false;
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);