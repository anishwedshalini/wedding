// =========================
// Wedding Countdown
// =========================

const weddingDate = new Date("November 25, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================
// Smooth Fade Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    ".event-card, .gallery-item, .hero-left, .hero-right, .section-title, .venue-card"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});


// =========================
// Back To Top Button
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =========================
// Floating Flowers
// =========================

const flowerContainer = document.getElementById("flower-container");

const flowers = ["🌸","🌺","🌼","🌷"];

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "vw";

    flower.style.fontSize = (18 + Math.random()*18) + "px";

    flower.style.animationDuration = (8 + Math.random()*5) + "s";

    flower.style.opacity = 0.4 + Math.random()*0.4;

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    },13000);

}

setInterval(createFlower,1800);

// =======================================
// Background Music
// =======================================

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        bgMusic.pause();

        musicBtn.innerHTML = "🎵";

        musicBtn.classList.remove("playing");

    } else {

        bgMusic.play();

        musicBtn.innerHTML = "🔊";

        musicBtn.classList.add("playing");

    }

    musicPlaying = !musicPlaying;

});

// ======================================
// Welcome Screen
// ======================================

const welcomeScreen = document.getElementById("welcomeScreen");
const enterWedding = document.getElementById("enterWedding");

enterWedding.addEventListener("click", () => {

    bgMusic.play();

    musicBtn.innerHTML = "🔊";
    musicBtn.classList.add("playing");
    musicPlaying = true;

    const flap = document.querySelector(".envelope-flap");
    const letter = document.querySelector(".envelope-letter");
    const seal = document.querySelector(".seal");

    /* Heart seal pops */

    seal.animate([
        {transform:"translateX(-50%) scale(1)"},
        {transform:"translateX(-50%) scale(1.3)"},
        {transform:"translateX(-50%) scale(.9)"},
        {transform:"translateX(-50%) scale(0)"}
    ],{
        duration:450,
        fill:"forwards",
        easing:"ease"
    });

    /* Open flap */

    setTimeout(()=>{

        flap.style.transform="rotateX(-180deg)";

    },250);

    /* Letter slides out */

    setTimeout(()=>{

        letter.style.transition="transform 1.8s cubic-bezier(.22,1,.36,1)";

        letter.style.transform="translateY(-170px)";

    },650);

    /* Fade welcome screen */

    setTimeout(()=>{

        document.body.classList.add("blur-opening");

const sparkleLayer = document.createElement("div");
sparkleLayer.className = "sparkles";
document.body.appendChild(sparkleLayer);

for(let i=0;i<45;i++){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=(40+Math.random()*30)+"vh";

    s.style.animationDelay=(Math.random()*0.5)+"s";

    sparkleLayer.appendChild(s);

}

setTimeout(()=>{

    sparkleLayer.remove();

    document.body.classList.remove("blur-opening");

},1800);

        welcomeScreen.classList.add("hide");

    },3200);

    setTimeout(()=>{

        welcomeScreen.style.display="none";

    },3900);

});