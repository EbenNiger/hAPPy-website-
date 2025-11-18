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

// Simple fade-in animations on scroll
const elements = document.querySelectorAll(".fade");

function fadeInOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);￼Enter
