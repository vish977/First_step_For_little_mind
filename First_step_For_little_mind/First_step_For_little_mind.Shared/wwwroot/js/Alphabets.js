var canvas = document.getElementById('myCanvas');
//var audio = document.getElementById("myAudio");
var ctx = canvas.getContext('2d');
var image = new Image();
image.src = "_content/First_step_For_little_mind.Shared/Image/English/A.jpg";

//playAudio();
//ctx.fillRect(0, 0, 50, 50);

var startX = 150; 
var x = startX;
var y = 100;
var width = 10;
var height = 10;
var maxWidth = 100;
var maxHeight = 100;
var shrinkHeight = 400;
var minWidth = 50;
var minHeight = 50;
var speed = 1;
var moveSpeed = 1;
var expanding = true;
var paused = false;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    var newX = x - width / 2;
    var newY = y - height / 2;

    ctx.fillStyle = "blue";
    ctx.fillRect(newX, newY, width, height);
    //ctx.drawImage(newX, newY, width, height);

    if (expanding) {
        if (width < maxWidth && height < maxHeight) {
            width += speed;
            height += speed;
        } else if (!paused) {
            // Pause before shrinking
            paused = true;
            setTimeout(() => {
                expanding = false; // Switch to shrinking
                paused = false;
            }, 1000); 
        }
    } else {
        if (width > minWidth && height > minHeight) {
            width -= speed;
            maxHeight -= speed;
            x -= moveSpeed;
            y -= moveSpeed;
        }

    }

    requestAnimationFrame(animate); // Continue animation
}


animate(); // Start animation
function playAudio() {
    audio.play();
}


