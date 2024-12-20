const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
    },
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const timerElement = document.getElementById("timer");

function loadQuestion() {
    // Reset timer
    clearInterval(timer);
    timeLeft = 10;
    timerElement.textContent = timeLeft;

    // Display question and options
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        answersElement.appendChild(button);
    });

    // Start timer
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    questionElement.textContent = "Quiz Finished!";
    answersElement.innerHTML = "";
    document.querySelector(".timer").style.display = "none";
}

// Start the quiz
loadQuestion();
