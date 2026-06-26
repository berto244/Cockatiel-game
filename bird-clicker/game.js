let seeds = 0, power = 1, auto = 0, mult = 1, lvl = 1;

const bird = document.getElementById('bird');
const seedsEl = document.getElementById('seeds');
const lvlEl = document.getElementById('level');
const msg = document.getElementById('message');

bird.addEventListener('click', () => {
    seeds += power * mult;
    bird.style.transform = 'scale(0.85) rotate(-15deg)';
    setTimeout(() => bird.style.transform = 'scale(1) rotate(0)', 100);
    update();
});

function update() {
    seedsEl.textContent = Math.floor(seeds);
    lvlEl.textContent = lvl;
}

document.getElementById('u1').onclick = () => { if (seeds >= 50) { seeds -= 50; power += 2; update(); } };
document.getElementById('u2').onclick = () => { if (seeds >= 250) { seeds -= 250; auto += 8; update(); } };
document.getElementById('u3').onclick = () => { if (seeds >= 1200) { seeds -= 1200; mult *= 3; update(); } };
document.getElementById('u4').onclick = () => { if (seeds >= 5000) { seeds -= 5000; mult += 0.5; update(); } };

function buyPremium() {
    mult *= 1.5;
    msg.textContent = "PREMIUM UNLOCKED!";
    setTimeout(() => msg.textContent = '', 2000);
}

setInterval(() => { seeds += auto * mult / 10; update(); }, 100);
update();
