gsap.registerPlugin(ScrollTrigger);

gsap.to("#firstDiv", {
    backgroundImage: "none",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#secondDiv",
        start: "top center", // When secondDiv reaches the center of viewport
        toggleActions: "play none reverse none",
    }
});
