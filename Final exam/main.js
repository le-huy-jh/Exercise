const SELECTED_RESPONSE = "SELECTED_RESPONSE";
const CONSTRUCTED_RESPONSE = "CONSTRUCTED_RESPONSE";
const DEFAULT_TIME = 1000;

const questionContainer = document.querySelector(".question");
const answerContainer = document.querySelector(".answer");
const score = document.querySelector(".score span");
const submitButton = document.querySelector(".submit");
const resetButton = document.querySelector(".reset");
const timerContainer = document.querySelector(".timer");

const questions = [
  {
    type: SELECTED_RESPONSE,
    question: "How Long Is One Day on Other Planets?",
    answers: ["12", "24", "36", "55"],
    correct: "24",
  },
  {
    type: CONSTRUCTED_RESPONSE,
    question: "What is your name",
  },
  {
    type: SELECTED_RESPONSE,
    question: "How many days are in a week?",
    answers: ["12", "3", "4", "7"],
    correct: ["4", "7"],
  },
];

const getRandomNum = (max, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

const submitAnswer = (question, config = { increaseScore: 1 }) => {
  timer.stop();

  if (question.type === CONSTRUCTED_RESPONSE) return;

  const answerSelected = document.querySelectorAll("input:checked");
  if (
    isCheckbox(question) &&
    answerSelected.length === question.correct.length
  ) {
    answerSelected.forEach((answer) => {
      if (!question.correct.includes(answer.value)) {
        return;
      }
    });
  } else {
    if (!question.correct.includes(answerSelected[0].value)) return;
  }
  score.innerHTML = +score.innerHTML + config.increaseScore;
};

resetButton.onclick = () => {
  createQuestion();
};

timerContainer.onclick = () => {
  createQuestion();
};

const createQuestion = () => {
  timer.stop();
  timer.start();
  renderQuestion();
};

const makeTimer = (time = DEFAULT_TIME) => {
  let intervalId;
  let count = 0;
  return {
    start: () => {
      intervalId = setInterval(() => {
        timerContainer.innerHTML = count++;
      }, time);
    },
    stop: () => {
      clearInterval(intervalId);
    },
  };
};

const isCheckbox = (question) => Array.isArray(question.correct);

const renderQuestion = (
  config = { name: "answer", placeholder: "Type here" }
) => {
  let child;
  const rndQuestionIndex = getRandomNum(questions.length);
  const newQuestion = questions[rndQuestionIndex];
  questionContainer.innerHTML = newQuestion.question;

  if (newQuestion.type === SELECTED_RESPONSE) {
    const inputType = isCheckbox(newQuestion) ? "checkbox" : "radio";
    child = newQuestion.answers
      .map(
        (
          answer
        ) => `<input type="${inputType}" id="${answer}" name="${config.name}" value="${answer}" />
    <label for="${answer}">${answer}</label><br />`
      )
      .join("");
  } else {
    child = `<input type="text" placeholder="${config.placeholder}" />`;
  }
  answerContainer.innerHTML = child;

  submitButton.onclick = () => submitAnswer(newQuestion);
};

const timer = makeTimer();
