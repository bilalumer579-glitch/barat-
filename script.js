// ===============================
// ELEMENTS
// ===============================

const envelope = document.getElementById("envelope");
const countdownPage = document.getElementById("countdownPage");
const countdownNumber = document.getElementById("countdownNumber");
const cardPage = document.getElementById("cardPage");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;


// ===============================
// MUSIC BUTTON
// ===============================

musicBtn.onclick = function(event){

    event.stopPropagation();

    if(bgMusic.paused){

        bgMusic.play();
        musicBtn.innerHTML = "🔊";
        playing = true;

    }else{

        bgMusic.pause();
        musicBtn.innerHTML = "🔇";
        playing = false;

    }

};


// ===============================
// FALLING FLOWERS
// ===============================

const flowerContainer = document.getElementById("flowers");

function createFlower(){

    const flower = document.createElement("img");

    flower.src = "flower.png";
    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "%";

    flower.style.width =
        (35 + Math.random() * 30) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    flower.style.opacity =
        0.7 + Math.random() * 0.3;

    flowerContainer.appendChild(flower);

    setTimeout(function(){

        flower.remove();

    },11000);

}

setInterval(createFlower,250);


// ===============================
// OPEN ENVELOPE
// ===============================

envelope.onclick = function(){

    // Start music
    if(!playing){

        bgMusic.play().catch(function(){});

        playing = true;

    }

    // Open flap
    const flap = document.querySelector(".flap");

    if(flap){
        flap.style.transform = "rotateX(180deg)";
    }

    // Move letter up
    const letter = document.querySelector(".letter");

    if(letter){
        letter.style.transform = "translateY(-120px)";
    }

    // Start countdown
    setTimeout(startCountdown,900);

};


// ===============================
// COUNTDOWN
// ===============================

function startCountdown(){

    document.getElementById("envelopePage").style.display = "none";

    countdownPage.style.display = "flex";

    let number = 3;

    countdownNumber.innerHTML = number;

    let timer = setInterval(function(){

        number--;

        if(number > 0){

            countdownNumber.innerHTML = number;

        }else{

            clearInterval(timer);

            countdownPage.style.display = "none";

            showCard();

        }

    },1000);

}


// ===============================
// SHOW CARD
// ===============================

function showCard(){

    cardPage.style.transform = "translateY(0)";

    setTimeout(function(){

        const locationButton =
            document.querySelector(".locationButton");

        if(locationButton){

            locationButton.classList.add("show");

        }

    },800);

}