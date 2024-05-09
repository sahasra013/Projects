// Quiz data (questions and answers)
const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the currency of India?",
        options: ["Rupee", "Yen", "Dollar", "Euro"],
        correctAnswer: "Rupee"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "India", "Australia"],
        correctAnswer: "Japan"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

// Function to display the current question
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const answersHTML = currentQuestion.options.map(option => `<input type="radio" name="answer" value="${option}"> ${option}<br>`).join('');
    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>${answersHTML}`;
}

// Function to check the selected answer
function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
        resultDisplay.textContent = "Correct!";
    } else {
        resultDisplay.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        questionContainer.innerHTML = "";
        submitButton.style.display = "none";
        resultDisplay.textContent += ` Quiz completed!`;
        scoreDisplay.textContent = `Your Score: ${score}/${quizData.length}`;
    }
}

// Display the first question when the page loads
displayQuestion();
