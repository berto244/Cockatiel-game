let seeds = 0;
let clickPower = 1;
let autoSeeds = 0;
let multiplier = 1;
let level = 1;
let prestige = 0;
let isPremium = false;

const bird = document.getElementById('bird');
const seedsEl = document.getElementById('seeds');
const cpsEl = document.getElementById('cps');
const levelEl = document.getElementById('level');
const message = document.getElementById('message');

bird.addEventListener('click', () => {
    const earned = Math.floor(clickPower * multiplier);
    seeds += earned;
    bird.style.transform = 'scale(0.8) rotate(-15deg)';
    setTimeout(() => bird.style.transform = 'scale(1) rotate(0)', 80);
    if (Math.random() < 0.2) showMessage(["PRETTY BIRD!", "SQUAWK!", "SEEDS!!", "⚡ ZAP!", "YOU'RE BALD!"][Math.floor(Math.random()*5)]);
    updateUI();
    if (seeds > level * 800) {
        level++;
        multiplier = 1 + (level * 0.1);
        showMessage("LEVEL UP! 🏆");
    }
});

function updateUI() {
    seedsEl.textContent = Math.floor(seeds).toLocaleString();
    cpsEl.textContent = autoSeeds.toFixed(1);
    levelEl.textContent = level;
}

function showMessage(text) {
    message.textContent = text;
    setTimeout(() => message.textContent = '', 1800);
}

// Upgrades (add the rest as before)
document.getElementById('upgrade1').addEventListener('click', () => { if (seeds >= 50) { seeds -= 50; clickPower += 2; showMessage("UPGRADE!"); updateUI(); }});
// ... (repeat for other upgrades or ask me for full code)

function buyPremium() {
    if (confirm("Premium $4.99?")) {
        isPremium = true;
        multiplier *= 1.5;
        bird.src = "https://picsum.photos/id/106/220/220";
        showMessage("PREMIUM UNLOCKED!");
    }
}

setInterval(() => { seeds += (autoSeeds * multiplier) / 10; updateUI(); }, 100);
