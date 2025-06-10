// ~~~~ DEBUT - mode sombre ou lumineux ~~~~

// ==== Sélections ====
const body              = document.querySelector("body");
const darkTheme         = document.querySelector(".theme--dark");
const lightTheme        = document.querySelector(".theme--light");
const picInstallLight   = document.querySelector(".pic-install--light");
const picInstallDark    = document.querySelector(".pic-install--dark");

// ==== Evénements ====
darkTheme.addEventListener("click", function (event) {
    event.preventDefault();

    darkTheme.classList.remove("active")
    lightTheme.classList.add("active")

    body.classList.remove("dark")
    body.classList.add("light")

    picInstallDark.classList.remove("active")
    picInstallLight.classList.add("active")
})
lightTheme.addEventListener("click", function (event) {
    event.preventDefault();

    lightTheme.classList.remove("active")
    darkTheme.classList.add("active")

    body.classList.remove("light")
    body.classList.add("dark")

    picInstallDark.classList.add("active")
    picInstallLight.classList.remove("active")
})

// ~~~~ DEBUT - Burger popup ~~~~
const burger    = document.querySelector(".burger");
const menuPopup = document.querySelector(".mobile-popup");

burger.addEventListener("click", function (event) {
    event.preventDefault();

    menuPopup.classList.toggle("active");
    burger.classList.toggle("active");
})

// ~~~~ DEBUT - Page fade in/out ~~~~
document.querySelector('.animated-link').addEventListener('click', function(e) {
    e.preventDefault();

    // Ajoute une classe pour déclencher l'animation de fondu
    document.body.classList.add('fade-out');

    // Attend la fin de l'animation avant de naviguer
    setTimeout(function() {
        window.location.href = e.target.getAttribute('href');
    }, 1000); // Correspond à la durée de l'animation CSS
});

// ~~~~ DEBUT - Reveal section ~~~~
const readyToReveal = document.querySelectorAll(".to-reveal");

function letReveal() {
    readyToReveal.forEach(function (elementReveal) {
        scrolled = window.scrollY;
        let distanceToScroll = (elementReveal.offsetTop + (elementReveal.offsetHeight /2)) - window.innerHeight;
        if (scrolled > distanceToScroll) {
            elementReveal.classList.add("revealed");
        }
    })
}
letReveal();

window.addEventListener("scroll", function () {
    letReveal()
})