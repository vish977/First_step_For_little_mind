//window.highlightItem = function (id) {
//    document.querySelectorAll(".item").forEach(el => {
//        el.style.border = "2px solid #333";
//    });
//    const el = document.querySelector(`#columnA .item[data-id='${id}']`);
//    if (el) el.style.border = "2px solid blue";
//};

//window.drawLineBetweenElements = function (aId, bId) {
//    const canvas = document.getElementById("connectorCanvas");
//    const ctx = canvas.getContext("2d");

//    const elA = document.querySelector(`#columnA .item[data-id='${aId}']`);
//    const elB = document.querySelector(`#columnB .item[data-id='${bId}']`);

//    if (!elA || !elB) return;

//    const rect1 = elA.getBoundingClientRect();
//    const rect2 = elB.getBoundingClientRect();
//    const canvasRect = canvas.getBoundingClientRect();

//    const x1 = rect1.right - canvasRect.left;
//    const y1 = rect1.top + rect1.height / 2 - canvasRect.top;
//    const x2 = rect2.left - canvasRect.left;
//    const y2 = rect2.top + rect2.height / 2 - canvasRect.top;

//    ctx.strokeStyle = "red";
//    ctx.lineWidth = 2;
//    ctx.beginPath();
//    ctx.moveTo(x1, y1);
//    ctx.lineTo(x2, y2);
//    ctx.stroke();
//};

//window.redrawConnections = function (connections) {
//    const canvas = document.getElementById("connectorCanvas");
//    const ctx = canvas.getContext("2d");
//    ctx.clearRect(0, 0, canvas.width, canvas.height);

//    connections.forEach(conn => {
//        window.drawLineBetweenElements(conn.A, conn.B);
//    });
//};

window.redrawConnections = (connections) => {
    const canvas = document.getElementById("connectorCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before redrawing

    connections.forEach(conn => {
        drawLine(conn.A, conn.B);
    });
};

window.highlightItem = (id) => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.style.border = "2px solid blue";
};

window.drawLineBetweenElements = (idA, idB) => {
    const itemA = document.querySelector(`[data-id="${idA}"]`);
    const itemB = document.querySelector(`[data-id="${idB}"]`);

    const rectA = itemA.getBoundingClientRect();
    const rectB = itemB.getBoundingClientRect();

    const canvas = document.getElementById("connectorCanvas");
    const ctx = canvas.getContext("2d");

    const x1 = rectA.right - canvas.getBoundingClientRect().left;
    const y1 = rectA.top + rectA.height / 2 - canvas.getBoundingClientRect().top;
    const x2 = rectB.left - canvas.getBoundingClientRect().left;
    const y2 = rectB.top + rectB.height / 2 - canvas.getBoundingClientRect().top;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};
