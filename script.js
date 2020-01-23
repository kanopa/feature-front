var myCanvas;
var myStarField;
var stars = 1000;
var x = screen.availWidth;
var y = screen.availHeight;

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

var controller = new ScrollMagic.Controller();

var firstScroll = new TimelineMax();
firstScroll
    .set('.first-planet', {scale : 3.5, transformOrigin: "center"})
    .to('.first-planet',3, {scale: 2.5, y: "-50%"})
    .to('.first-planet',3, {scale: 1, y: "0%"})

var scene = new ScrollMagic.Scene({
    triggerElement: '.second-color',
    duration: "80%"
}).setTween(firstScroll)
    .addIndicators()
    .addTo(controller);

var secondScroll = new TimelineMax();
secondScroll
    .to('.second-planet',3, {x: "-120%"})
    .to('.third-planet',3, {x: "120%"})

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.second-picture',
    triggerHook: 0,
    duration: "150%",
}).setTween(secondScroll)
    .addIndicators()
    .setPin('.second-picture')
    .addTo(controller)

var reveal = [".first-planet",".second-planet",".third-planet"];
for(var i = 0 ; i < reveal.length; i++)
{
    new ScrollMagic.Scene({
        triggerElement: ".third-color",
        offset: -200,
        triggerHook: 1  
    }).setClassToggle(reveal[i], "visible")
    .addIndicators({name: "skdskd"})
    .addTo(controller);
}

var thirdScroll = new TimelineMax();
thirdScroll
    .set(".trigger1", {className:"+=trigger11"})
    .to(".trigger-photo1",2,{y: 100})
    .to(".wrapper-mars-pic", 4, {y: -180,z: -148, delay: 5})
	.to(".wrapper-mars-pic", 12,   {x: "-33.333%"})
    .to(".wrapper-mars-pic", 4, {y: 0, z: 0})
    .set(".trigger1", {className:"-=trigger11"})
    .to(".trigger-photo1",2,{y: 0})
    .to(".trigger-photo2",4,{y: 100})

    .set(".trigger2", {className:"+=trigger22"})
    .to(".wrapper-mars-pic", 4, {y: -180,z: -148, delay: 5})
    .to(".wrapper-mars-pic", 12, {x: "-66.666%"})
    .to(".wrapper-mars-pic", 4, {y: 0, z: 0})
    .set(".trigger2", {className:"-=trigger22"})
    .set(".trigger3", {className:"+=trigger33"})
    .to(".trigger-photo2",2,{y: 0})
    .to(".trigger-photo3",4,{y: 100})
    .set(".trigger3", { delay: 10 })

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".third-picture",
    triggerHook: 0,
    duration: "800%"
}).setTween(thirdScroll)
    .setPin(".third-picture")
    .addIndicators({name: 'indo'})
    .addTo(controller);

// var fourthScroll = new TimelineMax();
// fourthScroll
//     .to(".trigger1",5,{y: 200})
//     .to(".trigger2",5,{y: 270},"-=5")
//     .to(".trigger3",5,{y: 340},"-=5")

// var scene4 = new ScrollMagic.Scene({
//     triggerElement: ".second-part",
//     triggerHook: 0.5,
//     duration: "50%"
// }).setTween(fourthScroll)
//     .addIndicators({name: '13231312'})
//     .addTo(controller);

var zeroScroll = new TimelineMax();
zeroScroll
    .set(".text1",{autoAlpha:0,x: -400})
    .set(".text2",{autoAlpha:0,x: 400})

    .to(".text1",10,{autoAlpha:1, x: 0, delay: 3})
    .to(".text2",10,{autoAlpha:1, x: 0})

var scene0 = new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: ".first-picture",
    duration: "200%"
}).setTween(zeroScroll)
    .addIndicators({name:"first"})
    .setPin(".first-picture")
    .addTo(controller);

//.to('.second-planet',3, {bezier:[{x:-50, y:50}, {x:0, y:100}]/*bezier end*/, ease:Linear.easeNone, paused:false})
//.to('.third-planet',3, {bezier:[{x: 50, y:50}, {x:0, y:100}]/*bezier end*/, ease:Linear.easeNone, paused:false}, "-=3")