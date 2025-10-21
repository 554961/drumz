var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

document.addEventListener("keydown", (event) => {
    switch (event.key){
        case "w":
            crash.play();
        case "a":
            kick.play();
        case "s":
            snare.play();
        case "d":
            tom1.play();
        case "j":
            tom2.play();
        case "k":
            tom3.play();
        case "l":
            tom4.play();
        }

})