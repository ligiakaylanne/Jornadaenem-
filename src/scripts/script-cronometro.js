let timerInterval;
let elapsedTime = 0;
let isRunning = false;
let markCount = 0; // Contador para rastrear quantas vezes a mensagem foi exibida
const maxMarks = 5; // Limite máximo de exibições

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
    markCount = 0; // Resetar o contador ao zerar o cronômetro
    marksList.innerHTML = ''; // Limpar as mensagens exibidas
}

function displayStudyTime(message) {
    if (markCount < maxMarks) {
        const markTime = timerDisplay.textContent;
        const markElement = document.createElement('p');
        markElement.textContent = `${message} ${markTime}`;
        markElement.classList.add('study-time-message'); // Adiciona a classe CSS para estilizar a mensagem
        marksList.appendChild(markElement);
        markCount++; // Incrementa o contador após exibir uma nova mensagem
    }
}

powerButton.addEventListener('click', () => {
    if (isRunning) {
        // Pausar o cronômetro e exibir a mensagem
        stopTimer();
        powerButton.textContent = 'Iniciar';
        isRunning = false;
        displayStudyTime('Você estudou por');
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
        displayStudyTime('Você estudou por');
    }
});
