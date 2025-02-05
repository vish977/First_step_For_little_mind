var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth -20;
canvas.height = window.innerHeight - 85;
var ctx = canvas.getContext('2d');
//console.log("hello worl")

var backgroundImage = new Image();
backgroundImage.src = '_content/First_step_For_little_mind.Shared/Image/Apple.jpeg'; // Replace with your image URL

//backgroundImage.onload = function () {
//    // Define rectangle properties
//    var rectX = 50;  // X position of rectangle
//    var rectY = 50;  // Y position of rectangle
//    var rectWidth = 400; // Width of rectangle
//    var rectHeight = 300; // Height of rectangle

//    // Draw the rectangle (optional, just for reference)
//    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Add some transparency to the rectangle
//    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

//    // Draw the background image within the rectangle
//    ctx.drawImage(backgroundImage, rectX, rectY, rectWidth, rectHeight);

//    ctx.strokeStyle = 'black'; // Set the border color
//    ctx.lineWidth = 5; // Set the border width
//    ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); // Draw the border

// //second rectancle;
//    var rectX1 = 500;  // X position of rectangle
//    var rectY1 = 50;  // Y position of rectangle
//    var rectWidth1 = 400; // Width of rectangle
//    var rectHeight1 = 300; // Height of rectangle

//    // Draw the rectangle (optional, just for reference)
//    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Add some transparency to the rectangle
//    ctx.fillRect(rectX1, rectY1, rectWidth1, rectHeight1);

//    // Draw the background image within the rectangle
//    ctx.drawImage(backgroundImage, rectX1, rectY1, rectWidth1, rectHeight1);

//    ctx.strokeStyle = 'black'; // Set the border color
//    ctx.lineWidth = 5; // Set the border width
//    ctx.strokeRect(rectX1, rectY1, rectWidth1, rectHeight1); // Draw the border

//};
// Define the fixed rectangular area for drawing
var drawArea = {
    x: 100,   // Starting X-coordinate of the drawing area
    y: 100,   // Starting Y-coordinate of the drawing area
    width: 400,  // Width of the drawing area
    height: 200  // Height of the drawing area
};

var isDrawing = false;

// Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    draw(e);
});

// Stop drawing when mouse is released
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});

// Draw while mouse is moving inside the canvas
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        draw(e);
    }
});

// Function to draw on the canvas
function draw(e) {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // Check if the mouse is inside the drawing area
    if (isInsideDrawArea(e)) {
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

// Draw the fixed rectangular area (for visual feedback)
function drawRectangularArea() {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(drawArea.x, drawArea.y, drawArea.width, drawArea.height);
}


// Check if the mouse position is inside the defined drawing area
function isInsideDrawArea(e) {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // Check if the coordinates are inside the rectangle
    return x >= drawArea.x && x <= drawArea.x + drawArea.width &&
        y >= drawArea.y && y <= drawArea.y + drawArea.height;
}
// Draw the fixed rectangular area (for visual feedback)
function drawRectangularArea() {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(drawArea.x, drawArea.y, drawArea.width, drawArea.height);
}

// Call function to draw the fixed rectangular area initially
drawRectangularArea();
