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

var txt = document.getElementById('text');
var typewriter = new Typewriter(txt, {loop: false});
typewriter.changeDelay(35)
    .typeString("Want to see the sky?")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Go outssdj")
    .pauseFor(300)
    .deleteChars(4)
    .typeString(" and look up! That’s assuming you’re not on Mars, of course.Everything you see above the surface of the Earth is the sky")
    .pauseFor(1500)
    .changeDelay(200)
    .typeString("yyyyyy")
    .start();

var txt2 = document.getElementById('text2');
var typewriter2 = new Typewriter(txt2, {loop: false});
typewriter2.changeDelay(50)
    .typeString("A large, round or spherical object orbiting a star")
    .start();

var txt3 = document.getElementById('text3');
var typewriter3 = new Typewriter(txt3, {loop: false});
typewriter3.changeDelay(50)
    .typeString('It was a blue-sky morning in Jakarta, with a few clouds floating offshore to the north.')
    .start();

var txt4 = document.getElementById('text4');
var typewriter4 = new Typewriter(txt4, {loop: false});
typewriter4.changeDelay(50)
    .typeString("A galaxy is a collection of stars and planets that are held together by gravity. In a galaxy, the celestial bodies rotate around a central object.")
    .start();

var txt5 = document.getElementById('text5');
var typewriter5 = new Typewriter(txt5, {loop: true});
typewriter5.changeDelay(200)
    .typeString("Ta daaaa")
    .pauseFor(1500)
    .typeString("!!!")
    .pauseFor(3000)
    .start();