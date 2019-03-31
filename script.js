let man = document.getElementById("man");
let car = document.getElementById("car");
let lift =  document.getElementById("lift");
let restart = document.getElementById("restart");
let tl = new TimelineLite();

// Challenge requirements:
// Man should begin animating 1 second before car animation ends.
// One second after man animation ends both car and lift should go up simultaneously.

tl
    .to(car, 2, { x: 445 })
    .to(man, 1, { x: -150 }, 1)
    .to(car, 1, { y: "-=160" }, 2)
    .to(lift, 1, { y: "-=160"}, 2);

restart.onclick = function() {
    tl.restart();
}

// to see how this should look when done, here are some files

// .mov: https://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.mov
// .gif: https://greensock.com/wp-content/uploads/custom/position-challenge/position-challenge.gif
