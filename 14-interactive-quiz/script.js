const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const questionNumElement = document.getElementById('questionNum');
const totalQuestionsElement = document.getElementById('totalQuestions');
const finalScoreElement = document.getElementById('finalScore');
const maxScoreElement = document.getElementById('maxScore');
const resultMessageElement = document.getElementById('resultMessage');

totalQuestionsElement.textContent = questions.length;
maxScoreElement.textContent = questions.length;

function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    screen.classList.add('active');
}

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    questionNumElement.textContent = currentQuestion + 1;
    
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionBtn);
    });
    
    nextBtn.style.display = 'none';
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            option.classList.add('wrong');
        }
    });
    
    if (selectedIndex === question.correct) {
        score++;
        scoreElement.textContent = score;
    }
    
    nextBtn.style.display = 'block';
}

function showResult() {
    finalScoreElement.textContent = score;
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 80) {
        resultMessageElement.textContent = "Excellent! You're a quiz master!";
    } else if (percentage >= 60) {
        resultMessageElement.textContent = "Good job! Keep practicing!";
    } else {
        resultMessageElement.textContent = "Keep learning! You'll do better next time!";
    }
}

startBtn.addEventListener('click', () => {
    showScreen(quizScreen);
    loadQuestion();
});

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScreen(resultScreen);
        showResult();
    }
});

restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = score;
    showScreen(startScreen);
});

