// https://gsap.com/docs/v3/Installation?tab=cdn&module=esm&require=false&plugins=ScrollTrigger

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!

    gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true, // pin the trigger element while active
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=150%', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    })
    
    // add animations and labels to the timeline
    .to("img", {
        scale: 2,
        z: 350,
        ease: "power1.inOut",
    })
    .to(".hero", {
        scale: 1.1,
        ease: "power1.inOut",
    }, "<"); // "<" indique que l'animation commence en même temps
});