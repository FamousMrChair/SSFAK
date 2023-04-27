//access canvas and buttons via DOM (upodate HTML source to align)
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");
var requestID;

//most/all drawdot code omitted. Carry your best almagamated code forward from last work to retain dot grow/shrink functionality.
var clear = function(e) {
  e.preventDefault(); //Q:whatdis?
  ctx.clearRect (0, 0, 500, 500);
};

var radius = 0;
var growing = true;

var drawDot = (e) => {
    window.cancelAnimationFrame(requestID);
    ctx.clearRect( 0, 0, c.width, c.height );

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
    if (radius > c.width / 2){
        growing = false;
    }
    if (radius == 0){
        growing = true;
    }
    requestID = window.requestAnimationFrame(drawDot);
}


var dvdLogoSetup = function (e) {
  window.cancelAnimationFrame(requestID);
  var rectwidth = 60;
  var rectheight = 40;

  var rectX = Math.floor(Math.random() * (500-rectwidth));
  var rectY = Math.floor(Math.random() * (500-rectheight));
  var xVel = 3;
  var yVel = 2;
  var logo = new Image ();

  logo.src = "logo_dvd.jpg";

  var dvdLogo = function () {
    ctx.clearRect( 0, 0, c.width, c.height );
    //ctx.fillRect( rectX, rectY, rectwidth, rectheight );
    ctx.drawImage(logo, rectX, rectY, rectwidth, rectheight);

    if (rectX+rectwidth >= 500 || rectX < 0) {
      xVel = -1 * xVel;
    }

    if (rectY+rectheight >= 500 || rectY < 0) {
      yVel = -1 * yVel;
    }

    rectX += xVel;
    rectY += yVel;
    requestID = window.requestAnimationFrame(dvdLogo);
  };
  dvdLogo ();
};


var stopIt = function() {
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
};


dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener("click", stopIt);
