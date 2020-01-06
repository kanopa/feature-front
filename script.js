var myCanvas;
var myStarField;
var stars = 1000;
var x = 1920;
var y = 1000;

init();

function init() {
    myCanvas = new canvas(x, y, "star");
    myStarField = new starfield3D(myCanvas, stars, 0.5 ,x , y,
        x/2, y/2, "#ffffff", 100,0,0);
    go();
}

function go() {
    myCanvas.fill("#000");
    myStarField.draw();
    requestAnimationFrame(go);
}