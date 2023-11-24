const daysContainer = document.getElementById('days-container');
const hoursContainer = document.getElementById('hours-container');
const minutesContainer = document.getElementById('minutes-container');
const secondsContainer = document.getElementById('seconds-container');
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
        countdown.style.display = 'none';
        afterCountdownButton.style.display = 'block';
        clearInterval(interval);
        return;
    }

    updateElement(daysContainer, daysSpan, Math.floor(distance / (1000 * 60 * 60 * 24)), "Dias");
    updateElement(hoursContainer, hoursSpan, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), "Horas");
    updateElement(minutesContainer, minutesSpan, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), "Minutos");
    updateElement(secondsContainer, secondsSpan, Math.floor((distance % (1000 * 60)) / 1000), "Segundos");
}

function updateElement(container, element, value, label) {
    if (value > 0) {
        element.textContent = value;
        container.style.display = 'inline-block';
    } else {
        container.style.display = 'none';
    }
}

const interval = setInterval(updateCountdown, 1000);

afterCountdownButton.addEventListener('click', function() {
    window.location.href = 'https://www.externalsite.com';
});

// Efeito de Confetes
function createConfetti() {
   

