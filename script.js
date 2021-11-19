
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
bark.addEventListener("mouseenter", soundControl);
bregne.addEventListener("mouseenter", soundControl);
bark.addEventListener("mouseenter", soundControl);
berries.addEventListener("mouseenter", soundControl);
mos.addEventListener("mouseenter", soundControl);
grass.addEventListener("mouseenter", soundControl);


// WILL TRIGGER ON ENTER
bark.addEventListener("mouseleave", soundControl);
bregne.addEventListener("mouseleave", soundControl);
bark.addEventListener("mouseleave", soundControl);
berries.addEventListener("mouseleave", soundControl);
mos.addEventListener("mouseleave", soundControl);
grass.addEventListener("mouseleave", soundControl);

// MUSIC FUNCITONS

function soundControl(event){
    this.event = event
    this.interval_1;
    this.interval_2;


    this.introduceSound = function (event) {
        clearInterval(this.interval_1);

        this.targetSoundId = event.target.previousElementSibling.id
        this.targetSound = document.querySelector(`#${this.targetSoundId}`)
        this.targetSound.volume = 0;
        this.targetSound.play();
    
    
        this.interval_1 = setInterval(() => {          
    
            clearInterval(this.interval_2);
    
            if (this.targetSound.volume >= 0.9) {
                clearInterval(this.interval_1);
                return;
            }
    
            this.targetSound.volume += 0.005 ;
    
            }, 100)
    
    }

    this.fadeOutSound = function (event) {
        this.targetSoundId = event.target.previousElementSibling.id
        this.targetSound = document.querySelector(`#${this.targetSoundId}`)
    
        clearInterval(this.interval_1);
    
      this.interval_2 = setInterval(() => {
          console.log("DOWN")
    
            if (this.targetSound.volume <= 0.05 || this.targetSound.volume <= 0) {
                console.log("CLEEAR")
                this.targetSound.volume = 0
                clearInterval(this.interval_2);
                return;
            }
    
            this.targetSound.volume -= 0.005;
    
            }, 80)
    }    

    if(this.event.type === "mouseenter") {
        this.introduceSound(this.event)
    }

    if(this.event.type === "mouseleave") {
        this.fadeOutSound(this.event)
    }
    
}
