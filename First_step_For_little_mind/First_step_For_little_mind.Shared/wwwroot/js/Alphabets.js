var canvas = document.getElementById('myCanvas');
var audio = document.getElementById("myAudio");
var ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 50, 50);
var image = new Image();
image.src = "_content/First_step_For_little_mind.Shared/Image/English/A.jpg";
console.log("hello ji")

var width = 10;
var height = 10;  
var maxwidth = 80;
var maxHeight =90 ; 
var x = 150; 
var y = 70; 
var speed = 0.6;
function animate() {
    
    var newX = x - width / 2;
    var newY = y - height / 2;
    //ctx.fillRect(newX, newY, width, height);
    ctx.drawImage(image, newX, newY, width, height);
    //ctx.strokeStyle = "red";
    //ctx.lineWidth = 1;
    //ctx.strokeRect(newX, newY, width, height);
    if (height < maxHeight || width < maxwidth) {
        width += speed;
        height += speed;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(image, newX, newY, width, height);
    requestAnimationFrame(animate); 
}
playAudio();

animate();
function playAudio() {
    audio.play();
}


