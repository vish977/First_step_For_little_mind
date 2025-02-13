var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var startX = 150;
var x = startX;
var y = 70;
var width = 10;
var height = 10;
var maxWidth = 100;
var maxHeight = 100;
var minWidth = 50;
var minHeight = 50;
var speed = 1;
var moveSpeed = 2.5;
var expanding = true;
var paused = false;

var img = new Image();
var img1 = new Image();
img.src = "_content/First_step_For_little_mind.Shared/Image/English/A.png"; 
img1.src = "_content/First_step_For_little_mind.Shared/Image/English/Apple.png";

img.onload = function () {
    // Start animation only after image loads
    animate1();
};



function animate1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var newX = x - width / 2;
    var newY = y - height / 2;

    // Draw Rectangle
    //ctx.fillStyle = "blue";
    //ctx.fillRect(newX, newY, width, height);

    // Ensure the image is loaded before drawing
    if (img.complete) {
        ctx.drawImage(img, newX, newY, width, height);
    }

    if (expanding) {
        if (width < maxWidth && height < maxHeight) {
            width += speed;
            height += speed;
        } else if (!paused) {
            paused = true;
            setTimeout(() => {
                expanding = false;
                paused = false;
            }, 1000);
        }
    } else {
        if (width > minWidth && height > minHeight) {
            width -= speed;
            height -= speed;
            x -= moveSpeed;
            // y -= moveSpeed;

        }  
    }
   

    requestAnimationFrame(animate1);
}
//animate2();


function animate2() {
    var width1 = 10;
    var height1 = 10;
    var maxwidth1 = 200;
    var maxHeight1 = 200;
    var x1 = 150;
    var y1 = 70;
    var speed1 = 1;

    var newX = x1 - width1 / 2;
    var newY = y1 - height1 / 2;
    //ctx.fillRect(newX, newY, width, height);
    ctx.drawImage(img1, newX, newY, width1, height1);
    //ctx.strokeStyle = "red";
    //ctx.lineWidth = 1;
    //ctx.strokeRect(newX, newY, width, height);
    if (height1 < maxHeight || width1 < maxwidth) {
        width1 += speed1;
        height1 += speed1;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img1, newX, newY, width, height);
    requestAnimationFrame(animate2);
}
