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
if (mouseGlow) {
    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
}

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
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

// ========================================================
//   HOMELEARN - EFEITOS VISUAIS
// ========================================================

// Ativar fade-in animations ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.classList.add('visible');
    });

    // Carrega nome do usuário se existir
    let nameUser = localStorage.getItem("nameUser");
    let nameTxt2 = document.getElementById("nameUser2");
    if (nameTxt2 && nameUser) {
        nameTxt2.innerHTML = nameUser;
    }
});

// Efeito de escala nos botões de anotações
document.addEventListener('DOMContentLoaded', () => {
    const notesButtons = document.querySelectorAll('.btn-notes');
    notesButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Efeitos do modal de anotações
document.addEventListener('DOMContentLoaded', () => {
    const notesModal = document.getElementById('notesModal');
    if (notesModal) {
        notesModal.addEventListener('show.bs.modal', function() {
            const textarea = document.getElementById('notesTextarea');
            if (textarea) {
                textarea.style.opacity = '0';
                setTimeout(() => {
                    textarea.style.opacity = '1';
                    textarea.style.transition = 'opacity 0.3s ease';
                }, 100);
            }
        });

        // Efeito hover nos botões do modal
        const modalButtons = notesModal.querySelectorAll('.btn-modal');
        modalButtons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
});

// Efeito de pulse nos ícones do modal
document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.btn-modal');
    modalButtons.forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon) {
            btn.addEventListener('click', function(e) {
                icon.style.animation = 'none';
                setTimeout(() => {
                    icon.style.animation = 'pulse 0.4s ease-out';
                }, 10);
            });
        }
    });
});

// Estilo para animação de pulse dos ícones
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .btn-notes {
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .btn-modal {
        transition: all 0.2s ease;
    }

    #notesTextarea {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(styleSheet);