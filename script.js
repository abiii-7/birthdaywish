const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function Firework(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 5; // Increased size for brightness
    this.speed = Math.random() * 4 + 3; // Increased speed for more dynamic movement
    this.angle = Math.random() * Math.PI * 2;
    this.alpha = 1;
}

Firework.prototype.update = function() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.alpha -= 0.03; // Faster fade out for more dramatic effect
};

Firework.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = 'rgba(255, 204, 0, 1)'; // Bright yellow color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    fireworks.push(new Firework(x, y));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.alpha <= 0) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

setInterval(createFirework, 200); // Increased frequency of fireworks
animate();

// Click event for "Beeha"
const beeha = document.getElementById('beeha');
const birthdayMessage = document.getElementById('birthdayMessage');
const hiddenMessage = document.getElementById('hiddenMessage');

beeha.addEventListener('click', () => {
    // Fade out the birthday message
    birthdayMessage.style.transition = 'opacity 1s ease';
    birthdayMessage.style.opacity = '0';

    // After the fade-out, hide the birthday message and show the hidden message
    setTimeout(() => {
        birthdayMessage.style.display = 'none';
        hiddenMessage.textContent = "Happy birthday, my love. I can't believe we've known each other for three months already; it feels like just yesterday when we met and started to get to know each other. Now, you're already such a core part of my life. ♥️\n\nI hope all your dreams come true, with or without me, because as long as you're happy, I'm happy. If you ever need support or a shoulder to lean on, you can always count on me, my love. I hope you win all your silent battles you don't tell me about.\n\nI want you to know how appreciated you are. Your beauty doesn't only stem from your looks but also from the way you treat others, showing what a truly beautiful person you are. I love how deeply you care about the people you love; every little thing you do reminds me of how much I love you.\n\nAnd if we ever grow distant, just know I'll never, ever forget how much you loved and meant to me. I'll always, forever, be your biggest supporter.\n\nI love you so much, and I hope you have an amazing birthday, because you deserve it and so much more. You're the sweetest, most caring, and kindest girl I have ever met. The way you sparkle and shine makes even the stars jealous. I love youuuuuuuu.\n\nHappy birthday! ♥️♥️";
        hiddenMessage.classList.remove('hidden');
        hiddenMessage.classList.add('visible'); // Add the visible class
    }, 1000); // Match the timeout with the fade-out duration
});