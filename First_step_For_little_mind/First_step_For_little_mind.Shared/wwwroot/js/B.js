﻿function learningAnimation(Id, letterImg, Img) {
    var canvas = document.getElementById(Id);
    if (!canvas) {
        console.log("Canvas element not found!");
        return;
    }
    console.log("hello ji");
    console.log(Img);
    console.log(letterImg);
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    debugger;


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

    img.src = `_content/First_step_For_little_mind.Shared/Image/English/${letterImg}`;
    img1.src = `_content/First_step_For_little_mind.Shared/Image/English/${Img}`;



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
                    animate2Started = true;
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

         
            var newX = x - width / 2;
            var newY = y - height / 2;
            ctx.drawImage(img, newX, newY, width, height);

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

    function playAudio() {
        var audio1 = document.getElementById("Audio1");
        if (audio1) {
            audio1.play();
        } else {
            console.log("Audio element not found!");
        }
    }

        animate1();
        playAudio();
    
}




//window.addEventListener("load", function () {
//    console.log("DOM is fully loaded");
//    setTimeout(() => {
//        learningAnimation("myCanvas", "A.png", "Apple.png");
//    }, 500)
//});