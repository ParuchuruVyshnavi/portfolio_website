// AOS Animation

AOS.init({
    duration: 1000,
    once: true
});




const typing = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent =
        currentWord.substring(0, charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1000);

            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0, charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,
        isDeleting ? 60 : 120);
}

typeEffect();




const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        toggle.innerHTML =
        `<i class="fa-solid fa-sun"></i>`;

    }else{

        toggle.innerHTML =
        `<i class="fa-solid fa-moon"></i>`;
    }
});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }else{

            counter.innerText = target;
        }
    };

    updateCounter();
});