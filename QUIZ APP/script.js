// Quiz Data
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Which programming language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the smallest planet in our solar system",
    options: ["Mercury", "Venus","Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "Who is the inventor of the telephone?",
    options: ["Alexander Graham Bell", "Farnklin Bell", "Setphen W.Wright", "John Bennett"],
    correctAnswer: "Alexander Graham Bell",
  }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const loginScreen = document.getElementById("login-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const usernameInput = document.getElementById("username");
const loginButton = document.getElementById("login-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");

// Login Button Logic
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    loginScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
  } else {
    alert("Please enter your name to start the quiz.");
  }
});

// Show Question
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(option));
    optionsElement.appendChild(button);
  });

  nextButton.classList.add("hidden");
  submitButton.classList.add("hidden");

  if (currentQuestionIndex === questions.length - 1) {
    submitButton.classList.remove("hidden");
  }
}

// Select Answer
function selectAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
  nextButton.classList.remove("hidden");
}

// Next Button Logic
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
});

// Submit Button Logic
submitButton.addEventListener("click", () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultMessage.textContent = 'final score.textContent= ${questions.length}';
});

//Show result

function showResults() {
  resultMessage.textContent = 'You scored ${score} out of ${question.length};'
  nextButton.classList.add("hidden");
  submitButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
}


// Restart Button Logic
restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});
