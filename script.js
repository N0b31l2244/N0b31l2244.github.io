// ====== Canvas Lightning Effect ======
const canvas = document.getElementById("lightningCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// สีของสายฟ้า
const lightningColor = "#ff6600";

function drawLightning(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = lightningColor;
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

// วาดสายฟ้าตามเมาส์
document.addEventListener("mousemove", (e) => {
    drawLightning(e.clientX, e.clientY);
});

// ====== Lightning Emoji Effect ======
const emojiContainer = document.createElement("div");
emojiContainer.style.position = "fixed";
emojiContainer.style.top = "0";
emojiContainer.style.left = "0";
emojiContainer.style.width = "100%";
emojiContainer.style.height = "100%";
emojiContainer.style.pointerEvents = "none";
document.body.appendChild(emojiContainer);

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.innerHTML = "⚡️"; // เปลี่ยนเป็นอิโมจิสายฟ้า
    emoji.style.position = "absolute";
    emoji.style.fontSize = `${Math.random() * 10 + 15}px`;
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = "-10px";
    emoji.style.opacity = Math.random() * 0.5 + 0.5;
    emoji.style.animation = `falling ${Math.random() * 5 + 5}s linear infinite`;
    emojiContainer.appendChild(emoji);
    setTimeout(() => emoji.remove(), 10000);
}

// สร้างอิโมจิใหม่ทุก 300ms
setInterval(createEmoji, 300);

// สร้าง Animation สำหรับการตกลงมา
const style = document.createElement("style");
style.innerHTML = `
@keyframes falling {
    to {
        transform: translateY(100vh) rotate(${Math.random() * 360}deg);
    }
}`;
document.head.appendChild(style);
