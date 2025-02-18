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
var animate2Started = false;

var img = new Image();
var img1 = new Image();
img.src = "_content/First_step_For_little_mind.Shared/Image/English/A.png";
img1.src = "_content/First_step_For_little_mind.Shared/Image/English/Apple.png";

img.onload = function () {
    animate1();
    playAudio();
};

function animate1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var newX = x - width / 2;
    var newY = y - height / 2;

    ctx.drawImage(img, newX, newY, width, height);

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
        } else {
            if (!animate2Started) {
                animate2Started = true; // Ensure animate2 is called only once
                requestAnimationFrame(animate2);
            }
            return;
        }
    }

    requestAnimationFrame(animate1);
}

function animate2() {
    var width1 = 10;
    var height1 = 10;
    var maxWidth1 = 100;
    var maxHeight1 = 100;
    var x1 = 150;
    var y1 = 80;
    var speed1 = 1;

    function grow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw first image at its final position
        var newX = x - width / 2;
        var newY = y - height / 2;
        ctx.drawImage(img, newX, newY, width, height);

        // Draw second image
        var newX1 = x1 - width1 / 2;
        var newY1 = y1 - height1 / 2;
        ctx.drawImage(img1, newX1, newY1, width1, height1);

        if (width1 < maxWidth1 && height1 < maxHeight1) {
            width1 += speed1;
            height1 += speed1;
            requestAnimationFrame(grow);
        }
    }

    grow();
}

var audio1 = document.getElementById("Audio1");
function playAudio() {
    audio1.play();

}

var audio = document.getElementById("audio");

function playAudio2() {
    audio.play();
}


  //voice on hovering on divcard.
function cardAudioPlay(audioId) {
    var cardAudio = document.getElementById(audioId);
    cardAudio.currentTime = 0; // Restart audio from the beginning
    cardAudio.play();
}

function cardpauseAudio(audioId) {
    var cardAudio = document.getElementById(audioId);
    cardAudio.pause();
    cardAudio.currentTime = 0; // Reset audio to start when mouse leaves
}

