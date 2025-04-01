document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded!");
    var canvas = document.getElementById("Tracing");
    var ctx = canvas.getContext("2d");

    ctx.font = "30px Arial";
    ctx.fillStyle = "White";
    ctx.fillText("A", 50, 100);


});
