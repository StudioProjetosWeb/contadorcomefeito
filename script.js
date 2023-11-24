const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const afterCountdownButton = document.getElementById('after-countdown');

const targetDate = new Date('December 8, 2023 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector('.countdown-container').style.display = 'none';
        afterCountdownButton.style.display = 'block';
        clearInterval(interval);
        return;
    }

    daysSpan.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursSpan.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesSpan.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsSpan.textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

const interval = setInterval(updateCountdown, 1000);

afterCountdownButton.addEventListener('click', function() {
    window.location.href = 'https://www.externalsite.com';
});

// Efeito de Confetes
window.addEventListener('load', createConfetti);

function createConfetti() {
    const confettiCount = 100;
    const colors = ['#f2d74e', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5']; // Cores dos confetes

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear ${Math.random() * 3}s infinite`;
        document.body.appendChild(confetti);
    }
}

// Adicionando a animação de queda dos confetes
document.styleSheets[0].insertRule(`
    @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
`, document.styleSheets[0].cssRules.length);
