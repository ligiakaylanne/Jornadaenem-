let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const powerButton = document.getElementById('power');
const resetButton = document.getElementById('reset');
const markButton = document.getElementById('mark');
const marksList = document.getElementById('marks-list');

function updateTimerDisplay(time) {
    let hours = Math.floor(time / (60 * 60 * 1000));
    let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((time % (60 * 1000)) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateTimerDisplay(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateTimerDisplay(elapsedTime);
    isRunning = false;
    powerButton.textContent = 'Iniciar';
}

powerButton.addEventListener('click', () => {
    if (isRunning) {
        // Pausar o cronômetro
        stopTimer();
        powerButton.textContent = 'Iniciar';
        isRunning = false;
    } else {
        // Iniciar o cronômetro
        startTimer();
        powerButton.textContent = 'Pausar';
        isRunning = true;
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});

markButton.addEventListener('click', () => {
    if (isRunning) {
        const markTime = timerDisplay.textContent;
        const markElement = document.createElement('p');
        markElement.textContent = `Marca: ${markTime}`;
        marksList.appendChild(markElement);
    }
});
