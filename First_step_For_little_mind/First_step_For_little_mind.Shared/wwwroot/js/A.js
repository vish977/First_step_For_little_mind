window.initializeCanvas = async (letter) => {
    await document.fonts.ready;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0, lastY = 0;

    function drawLetter() {
        // Blue background
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw filled white letter
        ctx.font = "400px 'Baloo 2'";
        ctx.fillStyle = "white";
        ctx.fillText(letter.toUpperCase(), 150, 250);

        // Draw red border around the letter
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5; // Border thickness
        ctx.strokeText(letter.toUpperCase(), 150, 250);
    }

    drawLetter();

    function isInsideLetter(x, y) {
        const imageData = ctx.getImageData(x, y, 1, 1).data;
        // Check if pixel is close to white (for anti-aliased smooth edges)
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

window.clearCanvas = (letter) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Blue background
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // White filled letter
    ctx.font = "400px 'Baloo 2'";
    ctx.fillStyle = "white";
    ctx.fillText(letter.toUpperCase(), 150, 250);

    // Red border
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeText(letter.toUpperCase(), 150, 250);
};
