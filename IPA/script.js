// ⚡ เอฟเฟกต์สายฟ้า
const canvas = document.getElementById("lightningCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLightning(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < 10; i++) {
        let angle = Math.random() * Math.PI * 2;
        let length = Math.random() * 20 + 10;
        x += Math.cos(angle) * length;
        y += Math.sin(angle) * length;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 100);
}
document.addEventListener("mousemove", (e) => {
    drawLightning(e.clientX, e.clientY);
});

// 🌸 ซากุระร่วง
const sakuraContainer = document.getElementById("sakura-container");
function createSakura() {
    const sakura = document.createElement("div");
    sakura.innerHTML = "🌸";
    sakura.style.position = "absolute";
    sakura.style.fontSize = `${Math.random() * 10 + 15}px`;
    sakura.style.left = `${Math.random() * 100}vw`;
    sakura.style.top = "-10px";
    sakura.style.opacity = Math.random() * 0.5 + 0.5;
    sakura.style.animation = `falling ${Math.random() * 5 + 5}s linear infinite`;
    sakuraContainer.appendChild(sakura);
    setTimeout(() => sakura.remove(), 10000);
}
setInterval(createSakura, 300);
const style = document.createElement("style");
style.innerHTML = `
@keyframes falling {
    to {
        transform: translateY(100vh) rotate(${Math.random() * 360}deg);
    }
}`;
document.head.appendChild(style);

// 🔊 เพลงเบาๆ
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    audio.volume = 0.5;
    audio.play().catch(err => console.log("Autoplay blocked:", err));
});
