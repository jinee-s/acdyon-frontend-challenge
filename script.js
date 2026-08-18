// Reveal sections when they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// Optional Easter egg.
// Type the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let keySequence = [];

document.addEventListener("keydown", (event) => {
    keySequence.push(event.key);

    if (keySequence.length > konamiCode.length) {
        keySequence.shift();
    }

    if (keySequence.join(",") === konamiCode.join(",")) {
        alert("🚀 You found the secret!");
        keySequence = [];
    }
});
