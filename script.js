// Smooth scroll for navigation links
document.querySelectorAll("nav a, .btn").forEach(link => {
    link.addEventListener("click", function(e) {
        const target = this.getAttribute("href");
        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Fade-in animation
const fadeElements = document.querySelectorAll(".fade");

function fadeInOnScroll() {
    fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            setTimeout(() => el.classList.add("visible"), index * 150);
        }
    });
}

window.addEventListener("load", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll);
