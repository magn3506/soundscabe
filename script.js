
// BACKGROUND SOUNDS
const forest = document.querySelector("#forest");
const noise = document.querySelector("#noise");

// DEFAULT BG SOUND LEVEL
forest.volume = 0.1
noise.volume = 0.2

// SOUNDS
const birds = document.querySelector("#birds");
const frogs = document.querySelector("#frogs");
const bees = document.querySelector("#bees");
const ravens = document.querySelector("#birds");
const bunfire = document.querySelector("#bunfire");

// images
const bark = document.querySelector("#bark");
const bregne = document.querySelector("#bregne");
const berries = document.querySelector("#berries");
const mos = document.querySelector("#mos");
const grass = document.querySelector("#grass");


// EVENTLISTENERS 

// WILL TRIGGER ON ENTER
bark.addEventListener("mouseenter", introduceSound);
bregne.addEventListener("mouseenter", introduceSound);
bark.addEventListener("mouseenter", introduceSound);
berries.addEventListener("mouseenter", introduceSound);
mos.addEventListener("mouseenter", introduceSound);
grass.addEventListener("mouseenter", introduceSound);


// WILL TRIGGER ON ENTER
bark.addEventListener("mouseleave", fadeOutSound);
bregne.addEventListener("mouseleave", fadeOutSound);
bark.addEventListener("mouseleave", fadeOutSound);
berries.addEventListener("mouseleave", fadeOutSound);
mos.addEventListener("mouseleave", fadeOutSound);
grass.addEventListener("mouseleave", fadeOutSound);

// MUSIC FUNCITONS

let interval_1;
let interval_2;

function introduceSound (event) {

    targetSoundId = event.target.previousElementSibling.id
    targetSound = document.querySelector(`#${targetSoundId}`)
    targetSound.volume = 0;
    targetSound.play();


    interval_1 = setInterval(() => {
        console.log("WHAT")
        console.log(targetSound.volume)

        clearInterval(interval_2);

        if (targetSound.volume >= 0.9) {
            clearInterval(interval_1);
            return;
        }

        targetSound.volume += 0.005 ;

        }, 100)

}

function fadeOutSound (event) {

    targetSoundId = event.target.previousElementSibling.id
    targetSound = document.querySelector(`#${targetSoundId}`)

    clearInterval(interval_1);

  interval_2 = setInterval(() => {
      console.log(targetSound.volume)

        if (targetSound.volume <= 0.05 || targetSound == 0) {
            console.log("CLEEAR")
            targetSound.volume = 0
            clearInterval(interval_2);
            return;
        }

        targetSound.volume -= 0.005;

        }, 80)
}    