var questions = [
  { num1: 2, num2: 3 },
  { num1: 5, num2: 4 },
  { num1: 7, num2: 2 },
  { num1: 8, num2: 9 },
  { num1: 4, num2: 2 },
  { num1: 3, num2: 3 },
  { num1: 4, num2: 4},
  { num1: 6, num2: 5 },
  { num1: 5, num2: 2 },
  { num1: 6, num2: 3 }
];

var currentQuestion = 0;
var score = 0;

function generateQuestion() {
  var question = questions[currentQuestion];
  var questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";

  var questionText = document.createElement("h2");
  questionText.textContent = "¿Cuánto es " + question.num1 + " x " + question.num2 + "?";
  questionContainer.appendChild(questionText);

  var answerInput = document.createElement("input");
  answerInput.type = "number";
  answerInput.id = "answer";
  answerInput.required = true;
  questionContainer.appendChild(answerInput);
}

function checkAnswer() {
  var userAnswer = parseInt(document.getElementById("answer").value);
  var question = questions[currentQuestion];
  var correctAnswer = question.num1 * question.num2;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    generateQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  var resultMessage = document.getElementById("result-message");
  resultMessage.textContent = "¡Has completado el formulario! Calificación: " + score + "/" + questions.length;
}

document.getElementById("multiplication-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
  checkAnswer();
});

// Generar la primera pregunta al cargar la página
generateQuestion();
