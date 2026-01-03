// Timer functionality
let timerInterval = null;
let timerTime = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerStart = document.getElementById('timerStart');
const timerPause = document.getElementById('timerPause');
const timerReset = document.getElementById('timerReset');

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timerTime);
    if (timerTime === 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerStart.style.display = 'inline-block';
        timerPause.style.display = 'none';
        alert('Timer finished!');
    }
}

timerStart.addEventListener('click', () => {
    if (!timerRunning) {
        const h = parseInt(hoursInput.value) || 0;
        const m = parseInt(minutesInput.value) || 0;
        const s = parseInt(secondsInput.value) || 0;
        timerTime = h * 3600 + m * 60 + s;
        if (timerTime > 0) {
            timerRunning = true;
            timerStart.style.display = 'none';
            timerPause.style.display = 'inline-block';
            timerInterval = setInterval(() => {
                timerTime--;
                updateTimerDisplay();
            }, 1000);
        }
    }
});

timerPause.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerStart.style.display = 'inline-block';
    timerPause.style.display = 'none';
});

timerReset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerTime = 0;
    timerRunning = false;
    updateTimerDisplay();
    timerStart.style.display = 'inline-block';
    timerPause.style.display = 'none';
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
});

// Stopwatch functionality
let stopwatchInterval = null;
let stopwatchTime = 0;
let stopwatchRunning = false;
let lapCount = 0;

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const stopwatchStart = document.getElementById('stopwatchStart');
const stopwatchPause = document.getElementById('stopwatchPause');
const stopwatchReset = document.getElementById('stopwatchReset');
const laps = document.getElementById('laps');

function updateStopwatchDisplay() {
    stopwatchDisplay.textContent = formatTime(stopwatchTime);
}

stopwatchStart.addEventListener('click', () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchStart.style.display = 'none';
        stopwatchPause.style.display = 'inline-block';
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
});

stopwatchPause.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchStart.style.display = 'inline-block';
    stopwatchPause.style.display = 'none';
    lapCount++;
    const lapItem = document.createElement('div');
    lapItem.className = 'lap-item';
    lapItem.textContent = `Lap ${lapCount}: ${formatTime(stopwatchTime)}`;
    laps.appendChild(lapItem);
});

stopwatchReset.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    lapCount = 0;
    updateStopwatchDisplay();
    stopwatchStart.style.display = 'inline-block';
    stopwatchPause.style.display = 'none';
    laps.innerHTML = '';
});

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

