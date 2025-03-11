


//    animate1();
//    playAudio();

//}



//  //voice on hovering on divcard.
//function cardAudioPlay(audioId) {
//    var cardAudio = document.getElementById(audioId);
//    cardAudio.currentTime = 0; // Restart audio from the beginning
//    cardAudio.play();
//}

//function cardpauseAudio(audioId) {
//    var cardAudio = document.getElementById(audioId);
//    cardAudio.pause();
//    cardAudio.currentTime = 0; // Reset audio to start when mouse leaves
//}
////console.log("hello ji");
//////function tracePractice(letter) {
////var canvasx = document.getElementById("LetterTrace");
////console.log("hello ji" + canvasx);
////    var ctxv = canvasx.getContext("2d");

////    ctxv.font = "300px Arial";
////    ctxv.strokeStyle = "red";
////    ctxv.lineWidth = 5;


////    ctxv.strokeText("hello", 50, 100);
//////}
//////tracePractice("A");

function animateCanvasText(canvasId, text1, text2) {
    return new Promise((resolve) => {
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext("2d");

        // Set initial canvas size to full window size
        canvas.width = window.innerWidth - 120;
        canvas.height = window.innerHeight;

        var x1 = -100;
        var x2 = canvas.width + 100;
        var y = canvas.height / 2;
        var speed = 2;

        function animateText() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Text 1
            ctx.font = "400px serif";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text1, x1, y);

            // Draw Text 2
            ctx.fillStyle = "red";
            ctx.fillText(text2, x2, y);

            // Move texts toward the center
            if (x1 < canvas.width / 2 - 60) x1 += speed;
            if (x2 > canvas.width / 2 + 60) x2 -= speed;

            if (x1 < canvas.width / 2 - 60 || x2 > canvas.width / 2 + 60) {
                requestAnimationFrame(animateText);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "red";
                ctx.fillText(text1 + "" + text2, canvas.width / 2, y);
                resolve(); 
            }
        }
        playAudio();
        animateText();
      

    });
}

function playAudio() {
    var audio = document.getElementById("audio");
    console.log(audio);
    if (audio) {
        audio.play();
    } else {
        console.log("Audio element not found!");
    }
}

function showImageInSecondCanvas(letter) {
    console.log(letter);
    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');

    var img = new Image();
    img.src = `_content/First_step_For_little_mind.Shared/Image/English/LetterRelatedImage/${letter}`;

    img.onload = function () {
        canvas2.width = img.width;
        canvas2.height = img.height;
        ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
    };

    img.onerror = function () {
        console.error("Image failed to load:", img.src);
    };
}


