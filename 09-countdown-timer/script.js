let countdownInterval = null;
let totalSeconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const daysInput = document.getElementById('days');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalSeconds);
    if (totalSeconds === 0 && isRunning) {
        clearInterval(countdownInterval);
        isRunning = false;
        startBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
        alert('Countdown finished!');
    }
}

function startCountdown() {
    if (!isRunning) {
        const days = parseInt(daysInput.value) || 0;
        const hours = parseInt(hoursInput.value) || 0;
        const mins = parseInt(minutesInput.value) || 0;
        const secs = parseInt(secondsInput.value) || 0;
        
        totalSeconds = days * 86400 + hours * 3600 + mins * 60 + secs;
        
        if (totalSeconds > 0) {
            isRunning = true;
            startBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-block';
            countdownInterval = setInterval(() => {
                totalSeconds--;
                updateDisplay();
            }, 1000);
        }
    }
}

function pauseCountdown() {
    clearInterval(countdownInterval);
    isRunning = false;
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function resetCountdown() {
    clearInterval(countdownInterval);
    totalSeconds = 0;
    isRunning = false;
    updateDisplay();
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    daysInput.value = 0;
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
}

startBtn.addEventListener('click', startCountdown);
pauseBtn.addEventListener('click', pauseCountdown);
resetBtn.addEventListener('click', resetCountdown);

updateDisplay();

