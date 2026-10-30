
const background = document.getElementById("ambientBackground");

const decorations = [
    "⭐", "✨", "🎀", "🌸", "🦋", "♡", "✿",
    "💗", "🩵", "🌷", "⋆", "💫", "🎀", "🌼"
];

// Moving background decorations
function createAmbientBackground() {
    if (!background) return;

    background.innerHTML = "";

    for (let i = 0; i < 45; i++) {
        const item = document.createElement("span");

        item.className = "decoration";

        item.textContent =
            decorations[Math.floor(Math.random() * decorations.length)];

        item.style.left = Math.random() * 100 + "%";
        item.style.fontSize = (12 + Math.random() * 20) + "px";
        item.style.animationDuration = (9 + Math.random() * 14) + "s";
        item.style.animationDelay = (-Math.random() * 20) + "s";

        background.appendChild(item);
    }
}

createAmbientBackground();

// Celebration effects
function createBurst(color) {
    const symbols = ["♡", "✦", "✿", "🎀", "✨", "🌸"];

    for (let i = 0; i < 22; i++) {
        const particle = document.createElement("span");

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.position = "fixed";
        particle.style.left = (15 + Math.random() * 70) + "vw";
        particle.style.top = (30 + Math.random() * 40) + "vh";
        particle.style.zIndex = "100";
        particle.style.pointerEvents = "none";
        particle.style.color = color;
        particle.style.fontSize = (15 + Math.random() * 22) + "px";

        particle.style.transition =
            "transform 1.5s ease-out, opacity 1.5s ease-out";

        document.body.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.transform =
                `translate(${(Math.random() - 0.5) * 240}px, ${-80 - Math.random() * 220}px) rotate(${Math.random() * 360}deg)`;

            particle.style.opacity = "0";
        });

        setTimeout(() => particle.remove(), 1600);
    }
}

// Open birthday page
function openBirthdayPage(page, color) {
    createBurst(color);

    const newTab = window.open(page, "_blank");

    if (!newTab) {
        alert("Please allow pop-ups for this website.");
    }
}

// Maram's cake
const maramCake = document.getElementById("maramCake");

if (maramCake) {
    maramCake.addEventListener("click", () => {
        openBirthdayPage("bubbles.html", "#75d5f2");
    });
}

// Merhan's cake
const merhanCake = document.getElementById("merhanCake");

if (merhanCake) {
    merhanCake.addEventListener("click", () => {
        openBirthdayPage("blossom.html", "#f58dbb");
    });
}

console.log("Birthday website is ready!");
