// ==================================================
// PASSWORD
// ==================================================

function checkPassword() {

    const passwordInput = document.getElementById("passwordInput");
    const lockScreen = document.getElementById("lockScreen");
    const mainWebsite = document.getElementById("mainWebsite");
    const errorMessage = document.getElementById("errorMessage");

    const password = passwordInput.value;
    const correctPassword = "RISHU0508";

    if (password === correctPassword) {

        lockScreen.style.display = "none";
        mainWebsite.style.display = "block";

        updateCountdown();

    } else {

        errorMessage.innerText =
            "❌ Wrong Password! Try Again ❤️";

    }
}


// ENTER KEY FOR PASSWORD

const passwordInput = document.getElementById("passwordInput");

if (passwordInput) {

    passwordInput.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });

}


// ==================================================
// COUNTDOWN
// ==================================================

const anniversaryDate =
    new Date("April 16, 2027 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = anniversaryDate - now;

    if (distance <= 0) {

        const countdown =
            document.querySelector(".countdown");

        if (countdown) {

            countdown.innerHTML =
                "<h2>🎉 HAPPY ANNIVERSARY MUMMY & PAPU! ❤️🎉</h2>";

        }

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );


    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if (daysElement) daysElement.innerText = days;

    if (hoursElement) hoursElement.innerText = hours;

    if (minutesElement) minutesElement.innerText = minutes;

    if (secondsElement) secondsElement.innerText = seconds;

}


updateCountdown();

setInterval(updateCountdown, 1000);


// ==================================================
// FLOATING HEARTS
// ==================================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 20 + "px";

    document.body.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 6000);

}


setInterval(createHeart, 700);


// ==================================================
// ==================================================
// INTERACTIVE PHOTO GALLERY
// ==================================================

let currentPhoto = 0;

const galleryPhotos =
    document.querySelectorAll(".gallery-photo");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const photoNumber =
    document.getElementById("photoNumber");

const photoDots =
    document.querySelectorAll(".photo-dot");


function showPhoto(index) {

    if (galleryPhotos.length === 0) {
        return;
    }

    if (index < 0) {
        currentPhoto = galleryPhotos.length - 1;
    }
    else if (index >= galleryPhotos.length) {
        currentPhoto = 0;
    }
    else {
        currentPhoto = index;
    }

    // Change photo
    galleryPhotos.forEach(function(photo) {
        photo.classList.remove("active");
    });

    galleryPhotos[currentPhoto].classList.add("active");


    // Change dots
    photoDots.forEach(function(dot) {
        dot.classList.remove("active-dot");
    });

    if (photoDots[currentPhoto]) {
        photoDots[currentPhoto].classList.add("active-dot");
    }


    // Change counter
    if (photoNumber) {
        photoNumber.innerText = currentPhoto + 1;
    }


    // Change caption
    const photoCaption =
        document.getElementById("photoCaption");

    const captions = [

        "A beautiful moment that will always stay in our hearts ❤️",

        "Two hearts, one beautiful journey together 💕",

        "Together, always and forever ♾️❤️"

    ];

    if (photoCaption) {
        photoCaption.innerText = captions[currentPhoto];
    }

}

// PREVIOUS

if (prevPhoto) {

    prevPhoto.addEventListener("click", function() {

        showPhoto(currentPhoto - 1);

    });

}


// NEXT

if (nextPhoto) {

    nextPhoto.addEventListener("click", function() {

        showPhoto(currentPhoto + 1);

    });

}


// DOTS

photoDots.forEach(function(dot) {

    dot.addEventListener("click", function() {

        const photoIndex =
            Number(dot.getAttribute("data-photo"));

        showPhoto(photoIndex);

    });

});


// AUTOMATIC SLIDESHOW

setInterval(function() {

    showPhoto(currentPhoto + 1);

}, 5000);


// ==================================================
// FIRST SURPRISE
// ==================================================

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseMessage =
    document.getElementById("surpriseMessage");


if (surpriseButton && surpriseMessage) {

    surpriseButton.addEventListener("click", function() {

        surpriseMessage.innerHTML =
            "🎉 Happy Anniversary Mummy & Papu! ❤️<br><br>" +
            "May your love continue to grow stronger every single day! 💕";

    });

}


// ==================================================
// GRAND FINAL SURPRISE
// ==================================================

const finalButton =
    document.getElementById("finalButton");

const finalMessage =
    document.getElementById("finalMessage");


if (finalButton && finalMessage) {

    finalButton.addEventListener("click", function() {

        finalMessage.classList.add("show");

        createConfetti();

    });

}


// ==================================================
// CONFETTI
// ==================================================

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            Math.random() * 25 + 15 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.transition =
            "top 3s linear";


        document.body.appendChild(confetti);


        setTimeout(function() {

            confetti.style.top = "110vh";

        }, 100);


        setTimeout(function() {

            confetti.remove();

        }, 3200);

    }

}


// ==================================================
// BACKGROUND MUSIC
// ==================================================

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


if (music && musicButton) {

    musicButton.addEventListener("click", function() {

        if (music.paused) {

            music.play()
                .then(function() {

                    musicButton.innerHTML =
                        "🔇 Pause Music";

                })
                .catch(function() {

                    musicButton.innerHTML =
                        "⚠️ Music Error";

                });

        } else {

            music.pause();

            musicButton.innerHTML =
                "🎵 Play Music";

        }

    });

}
// =========================
// MUSIC VISUALIZER
// =========================

const musicVisualizer =
    document.getElementById("musicVisualizer");

if (musicVisualizer && musicButton && music) {

    musicButton.addEventListener("click", function() {

        setTimeout(function() {

            if (!music.paused) {
                musicVisualizer.classList.add("playing");
            } else {
                musicVisualizer.classList.remove("playing");
            }

        }, 100);

    });

}


// ==================================================
// WELCOME SCREEN
// ==================================================

const enterWebsite =
    document.getElementById("enterWebsite");

const welcomeScreen =
    document.getElementById("welcomeScreen");


if (enterWebsite && welcomeScreen) {

    enterWebsite.addEventListener("click", function() {

        welcomeScreen.classList.add("hide");

    });

}


// ==================================================
// ANNIVERSARY LETTER
// ==================================================

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");


if (envelope && letterContent) {

    envelope.addEventListener("click", function() {

        letterContent.classList.add("show");

    });

}


// ==================================================
// CELEBRATION MODE
// ==================================================

const celebrationButton =
    document.getElementById("celebrationButton");

const celebrationMessage =
    document.getElementById("celebrationMessage");


if (celebrationButton && celebrationMessage) {

    celebrationButton.addEventListener("click", function() {

        celebrationMessage.classList.add("show");

        createConfetti();

        setTimeout(createConfetti, 1000);

        setTimeout(createConfetti, 2000);

    });

}


// ==================================================
// BACK TO TOP
// ==================================================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==================================================
// LOVE METER
// ==================================================

const loveMeterButton =
    document.getElementById("loveMeterButton");

const loveMeterFill =
    document.getElementById("loveMeterFill");

const lovePercent =
    document.getElementById("lovePercent");

const loveMeterMessage =
    document.getElementById("loveMeterMessage");


if (
    loveMeterButton &&
    loveMeterFill &&
    lovePercent &&
    loveMeterMessage
) {

    loveMeterButton.addEventListener("click", function() {

        let percentage = 0;

        loveMeterButton.disabled = true;

        loveMeterButton.innerText =
            "Measuring Love... ❤️";


        const timer =
            setInterval(function() {

                percentage++;


                loveMeterFill.style.width =
                    percentage + "%";


                lovePercent.innerText =
                    percentage + "%";


                if (percentage >= 100) {

                    clearInterval(timer);


                    loveMeterButton.innerText =
                        "❤️ Love = Infinite ❤️";


                    loveMeterMessage.innerHTML =
                        "💖 100% Love Reached! 💖<br><br>" +
                        "Actually... Mummy & Papu's love cannot be measured! ♾️❤️";

                }

            }, 25);

    });

}
// ==================================================
// CINEMATIC REVEAL
// ==================================================

const cinematicButton =
    document.getElementById("cinematicButton");

const cinematicScreen =
    document.getElementById("cinematicScreen");

const closeCinematic =
    document.getElementById("closeCinematic");


if (
    cinematicButton &&
    cinematicScreen &&
    closeCinematic
) {

    cinematicButton.addEventListener("click", function() {

        cinematicScreen.classList.add("show");

        createConfetti();

        setTimeout(createConfetti, 800);

        setTimeout(createConfetti, 1600);

    });


    closeCinematic.addEventListener("click", function() {

        cinematicScreen.classList.remove("show");

    });

}
// =========================
// FULLSCREEN PHOTO VIEWER
// =========================

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closePhotoViewer =
    document.getElementById("closePhotoViewer");

const galleryImages =
    document.querySelectorAll(".gallery-photo");


galleryImages.forEach(function(photo) {

    photo.addEventListener("click", function() {

        if (!photoViewer || !viewerImage) {
            return;
        }

        viewerImage.src = photo.src;

        photoViewer.classList.add("show");

    });

});


if (closePhotoViewer) {

    closePhotoViewer.addEventListener("click", function() {

        photoViewer.classList.remove("show");

    });

}


if (photoViewer) {

    photoViewer.addEventListener("click", function(event) {

        if (event.target === photoViewer) {

            photoViewer.classList.remove("show");

        }

    });

}
// =========================
// NIGHT MODE TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Check saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "night") {
        document.body.classList.add("night-mode");
        themeToggle.innerText = "☀️ Light Mode";
    }

    // Toggle theme
    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("night-mode");

        if (document.body.classList.contains("night-mode")) {

            themeToggle.innerText = "☀️ Light Mode";

            localStorage.setItem("theme", "night");

        } else {

            themeToggle.innerText = "🌙 Night Mode";

            localStorage.setItem("theme", "light");
        }

    });

}
// =========================
// SPECIAL WISH GENERATOR
// =========================

const wishButton =
    document.getElementById("wishButton");

const wishText =
    document.getElementById("wishText");

const wishes = [

    "Mummy & Papu, may your love keep growing stronger with every beautiful year. ❤️",

    "Wishing you both a lifetime filled with happiness, laughter and countless beautiful memories. 💕",

    "You both are the heart of our family. Happy Anniversary Mummy & Papu! ❤️🎉",

    "May every new chapter of your journey together be even more beautiful than the last. ✨❤️",

    "Two hearts, one beautiful journey, and a family filled with love. Happy Anniversary! 💖",

    "Forever together, forever smiling, forever making beautiful memories. ♾️❤️"

];

if (wishButton && wishText) {

    wishButton.addEventListener("click", function() {

        const randomIndex =
            Math.floor(Math.random() * wishes.length);

        wishText.style.opacity = "0";

        setTimeout(function() {

            wishText.innerText =
                wishes[randomIndex];

            wishText.style.opacity = "1";

        }, 250);

    });

}
// =========================
// FINAL GRAND SURPRISE
// =========================

const grandSurpriseButton =
    document.getElementById("grandSurpriseButton");

const grandSurpriseScreen =
    document.getElementById("grandSurpriseScreen");

const closeGrandSurprise =
    document.getElementById("closeGrandSurprise");


if (grandSurpriseButton && grandSurpriseScreen) {

    grandSurpriseButton.addEventListener("click", function() {

        grandSurpriseScreen.classList.add("show");

    });

}


if (closeGrandSurprise && grandSurpriseScreen) {

    closeGrandSurprise.addEventListener("click", function() {

        grandSurpriseScreen.classList.remove("show");

    });

}
// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".message-section, .gallery-section, .timeline-section, .reasons-section, .surprise-section, .letter-section, .final-section, .celebration-section, .love-meter-section, .cinematic-section, .wish-section, .family-memories-section, .grand-surprise-section"
    );

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});


function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
