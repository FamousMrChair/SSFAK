// retrieve node in DOM via ID

console.log(document);
var c = document.getElementById("slate");
console.log(document);
//instantiatWe a CanvasRenderingContext2D object
var ctx = c.getContext("2d");


var mode = "rect";

//var mouse = MouseEvent();

//var toggleMode = function(e) {
var toggleMode = (e) => {
    console.log("toggling...");
    if (mode == "rect") {
        mode = "circle";
    }
    else {
        mode = "rect";
    }
}

var drawRect = function(e) {
    var mouseX = mouse.clientX;
    var mouseY = mouse.clientY;
    console.log("mouseclick registered at ", mouseX, mouseY);
}

var drawCircle = (e) => {
    console.log("mouseclick registered at ", mouseX, mouseY)
}

var draw = (e) => {

}

var wipeCanvas = () => {

}
/*
c.addEventListern("click", draw);
var bToggler = document. ;
bTogglerToggler. ;
var clearB = ;
clearB.;
*/