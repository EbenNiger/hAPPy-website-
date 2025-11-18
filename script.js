// Smooth scroll for navigation links
document.querySelectorAll("nav a, .btn").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("href");
        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in animation for elements
const fadeElements = document.querySelectorAll(".fade");

function fadeInOnScroll() {
    fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            // Add 'visible' with a slight delay for staggered effect
            setTimeout(() => el.classList.add("visible"), index * 150);
        }
    });
}

// Make sure elements visible if in viewport on load
window.addEventListener("load", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll);
