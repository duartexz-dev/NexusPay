// --- NEBULA REVEAL SYSTEM ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- MOUSE GLOW TRACKER ---
const mouseGlow = document.getElementById('mouse-glow');
document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = e.clientX + 'px';
    mouseGlow.style.top = e.clientY + 'px';
});

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- BUTTON RIPPLE EFFECT ---
document.querySelectorAll('.btn-nebula').forEach(button => {
    button.addEventListener('click', function (e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple-premium');
        this.appendChild(ripple);
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        setTimeout(() => ripple.remove(), 600);
    });
});