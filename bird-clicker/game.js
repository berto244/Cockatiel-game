let seeds = 0;
const bird = document.getElementById('bird');
const s = document.getElementById('s');
const msg = document.getElementById('msg');

bird.addEventListener('click', () => {
    seeds += 1;
    s.textContent = seeds;
    bird.style.transform = 'scale(1.2)';
    setTimeout(() => bird.style.transform = 'scale(1)', 100);
    if (Math.random() < 0.1) msg.textContent = "Pretty Bird!";
    setTimeout(() => msg.textContent = '', 1000);
});
