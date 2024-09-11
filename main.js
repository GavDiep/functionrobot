// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Triangle function
function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (type === "fill") {
    ctx.fill();
  } else if (type === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Rectangle function
function rect(x, y, w, h, type) {
  if (type === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (type === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

// Circle function
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type === "fill") {
    ctx.fill();
  } else if (type === "stroke") {
    ctx.stroke();
  }
}

// Line Function
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Mustache function
function trapezoid(x1, y1, x2, y2, x3, y3, x4, y4) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.fill();
}

// hat function
function hat(r, g, b, x, y) {
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(x, y, 400, 75);
  ctx.fill();
}

// Medal Function:
function medal(x1, y1, x2, y2, x3, y3, x4, y4, r, type) {
  ctx.fillStyle = "rgb(81, 53, 44)";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();

  ctx.fillStyle = "rgb(255, 192, 0)";
  ctx.beginPath();
  ctx.arc(x4, y4, r, 0, 2 * Math.PI);
  ctx.fill();
}

// rectangular function calls:
// behind head rect
ctx.fillStyle = "rgb(100, 100, 100)";
rect(80, 260, 460, 80, "fill");
// the head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400, "fill");

// Triangular function calls:
// filled triangle for hair 1
ctx.fillStyle = "rgb(100, 100, 100)";
triangle(180, 80, 140, 100, 220, 100, "fill");
// filled triangle for hair 2
triangle(340, 80, 300, 100, 380, 100, "fill");
// outlined triangle for hair 1
triangle(260, 80, 220, 100, 300, 100, "stroke");
// outlined triangle for hair 2
triangle(420, 80, 380, 100, 460, 100, "stroke");
// filled triangle for hair 3
ctx.fillStyle = "rgb(180, 180, 180)";
triangle(300, 200, 220, 600, 380, 600, "fill");
// outlined triangle for nose 1
triangle(300, 280, 320, 320, 280, 320, "stroke");
// outlined triangle
triangle(300, 280, 320, 320, 280, 320, "stroke");
// rectangle the mouth
ctx.fillStyle = "rgb(255, 255, 255)";
rect(200, 350, 200, 60, "fill");

// circle func calls:
// filled circle Left eye socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");
// filled circle Right eye socket
circle(400, 250, 50, "fill");
// Filled circle left eye actual
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, "fill");
// filled circle right eye actual
circle(400, 250, 10, "fill");
// outlined left eye socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");
// outlined right eye socket
circle(200, 250, 50, "stroke");

// Line func calls:
// Horizontal teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);
// First vert line teeth
line(250, 350, 250, 410);
// Second vert line teeth
line(300, 350, 300, 410);
// Third Vert line Teeth
line(350, 350, 350, 410);
// left eyebrow
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(100, 100, 100)";
line(150, 180, 250, 180);
// Right eyebrow
line(350, 160, 450, 180);

// Hat func call:
hat(132, 200, 255, 100, 60);
trapezoid(175, 40, 425, 40, 475, 60, 125, 60);

// medal func call:
medal(280, 450, 320, 450, 300, 575, 300, 550, 30, "fill");

// trapezoid func call:
ctx.fillStyle = "rgb(92,62,34)";
trapezoid(275, 325, 325, 325, 350, 350, 250, 350);

// headphones using more rect and circle funcs
ctx.fillStyle = "black";
rect(50, 250, 50, 100, "fill");
rect(500, 250, 50, 100, "fill");
ctx.lineWidth = 20;
ctx.strokeStyle = "black";
line(75, 255, 100, 50);
line(525, 255, 500, 50);
rect(100, 50, 400, 40, "fill");
