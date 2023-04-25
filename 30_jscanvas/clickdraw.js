// Team GASLIGHTING GATEKEEPING GIRLBOSSES :: Kevin Xiao + Aden Garbutt
// SoftDev pd7
// K30 -- canvas based JS drawing
// 2023-04-24m

// retrieve node in DOM via ID
var c = document.getElementById("slate");
var buttonToggle = document.getElementById("buttonToggle")
var buttonClear = document.getElementById("buttonClear")

//instantiatWe a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var mode = "rect";

//var toggleMode = function(e) {
var toggleMode = (e) => {
    //console.log("toggling...");
    if (mode == "rect") {
      mode = "circle";
      buttonToggle.innerHTML = "circle";
    }
    else {
      mode = "rect";
      buttonToggle.innerHTML = "rect";
    }
}


var drawRect = function(e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  ctx.fillRect(mouseX - 7, mouseY - 128, 25, 25)
  console.log(`(${mouseX}, ${mouseY})`);
}


var drawCircle = (e) => {
  var mouseX = e.clientX
  var mouseY = e.clientY
  ctx.beginPath();
  ctx.arc(mouseX - 7, mouseY - 128, 10, 0, 2 * Math.PI, true);
  ctx.fill();
  console.log(`(${mouseX}, ${mouseY})`);
}


var draw = (e) => {
  if (mode == "rect") {
    drawRect(e);
  }
  else {
    drawCircle(e);
  }
}


var wipeCanvas = () => {
  ctx.clearRect(0, 0, 600, 600)
}

c.addEventListener("click", draw);
buttonToggle.addEventListener("click", toggleMode);
buttonClear.addEventListener("click", wipeCanvas);
