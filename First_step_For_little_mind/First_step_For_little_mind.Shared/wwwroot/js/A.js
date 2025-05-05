window.initializeCanvas = async (letter) => {
    await document.fonts.load("400px 'Baloo 2'");
    await document.fonts.ready;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0, lastY = 0;

    function drawLetter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "400px 'Baloo 2'";
        ctx.textBaseline = "top";
        ctx.lineWidth = 5;

        ctx.strokeStyle = "red";
        ctx.fillStyle = "white";

        ctx.strokeText(letter.toUpperCase(), 75  , 100);
        ctx.fillText(letter.toUpperCase(), 75  , 100);
    }

    drawLetter();

    function isInsideLetter(x, y) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        return imageData[0] > 200 && imageData[1] > 200 && imageData[2] > 200;
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
            const colorPicker = document.getElementById("colorPicker");
            ctx.strokeStyle = colorPicker.value;
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

window.clearCanvas = async (letter) => {
    await document.fonts.load("400px 'Baloo 2'");
    await document.fonts.ready;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "400px 'Baloo 2'";
    ctx.textBaseline = "top";
    ctx.lineWidth = 5;

    ctx.strokeStyle = "red";
    ctx.fillStyle = "white";

    ctx.strokeText(letter.toUpperCase(), 150, 50);
    ctx.fillText(letter.toUpperCase(), 150, 50);
};

function reloadPage() {
    location.reload();
}

