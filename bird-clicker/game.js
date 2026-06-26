let seeds = 0, clickPower = 1, autoSeeds = 0, multiplier = 1, level = 1, prestige = 0, isPremium = false;

const bird = document.getElementById('bird');
const seedsEl = document.getElementById('seeds');
const cpsEl = document.getElementById('cps');
const levelEl = document.getElementById('level');
const message = document.getElementById('message');

bird.addEventListener('click', () => {
    seeds += Math.floor(clickPower * multiplier);
    bird.style.transform = 'scale(0.8) rotate(-15deg)';
    setTimeout(() => bird.style.transform = 'scale(1) rotate(0)', 80);
    updateUI();
});

function updateUI() {
    seedsEl.textContent = Math.floor(seeds);
    cpsEl.textContent = autoSeeds.toFixed(1);
    levelEl.textContent = level;
}

document.getElementById('upgrade1').addEventListener('click', () => { if (seeds >= 50) { seeds -= 50; clickPower += 2; updateUI(); } });
document.getElementById('upgrade2').addEventListener('click', () => { if (seeds >= 250) { seeds -= 250; autoSeeds += 8; updateUI(); } });
document.getElementById('upgrade3').addEventListener('click', () => { if (seeds >= 1200) { seeds -= 1200; multiplier *= 3; updateUI(); } });
document.getElementById('upgrade4').addEventListener('click', () => { if (seeds >= 5000) { seeds -= 5000; multiplier += 0.5; updateUI(); } });

function buyPremium() {
    if (confirm('$4.99 Premium?')) {
        multiplier *= 1.5;
        bird.src = "https://picsum.photos/id/106/220/220";
    }
}

setInterval(() => { seeds += autoSeeds * multiplier / 10; updateUI(); }, 100);
