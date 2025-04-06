
window.initializeCanvas = async (letter) => {
    await document.fonts.ready;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0, lastY = 0;

    function drawLetter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "400px 'Baloo 2'";
        ctx.fillStyle = "black";
        ctx.fillText(letter.toUpperCase(), 150, 250);
    }

    drawLetter();

    function isInsideLetter(x, y) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        return imageData[0] === 0 && imageData[1] === 0 && imageData[2] === 0;
    }

    canvas.onmousedown = (e) => {
        const x = e.offsetX, y = e.offsetY;
        if (isInsideLetter(x, y)) {
            isDrawing = true;
            lastX = x;
            lastY = y;
        }
    };

    canvas.onmousemove = (e) => {
        if (!isDrawing) return;
        const x = e.offsetX, y = e.offsetY;

        if (isInsideLetter(x, y)) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = 45;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();

            lastX = x;
            lastY = y;
        }
    };

    canvas.onmouseup = () => isDrawing = false;
};

window.clearCanvas = (letter) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "400px 'Baloo 2'";
    ctx.fillStyle = "black";
    ctx.fillText(letter.toUpperCase(), 150, 250);
};
