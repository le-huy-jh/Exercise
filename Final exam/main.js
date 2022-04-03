const SELECTED_RESPONSE = "SELECTED_RESPONSE";
const CONSTRUCTED_RESPONSE = "CONSTRUCTED_RESPONSE";
const DEFAULT_TIME = 1000;
const CHECKBOX_TYPE = "checkbox";
const RADIO_TYPE = "radio";
const TEXT_TYPE = "text";
const HARD_MODE = "hard";
const EASY_MODE = "easy";

const QUESTION_DATA = [
  {
    type: SELECTED_RESPONSE,
    question: "How Long Is One Day on Other Planets?",
    answers: ["12", "24", "36", "55"],
    correct: ["24"],
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

const questionContainer = document.querySelector(".question");
const answerContainer = document.querySelector(".answer");
const score = document.querySelector(".score span");
const submitButton = document.querySelector(".submit");
const resetButton = document.querySelector(".reset");
const timerContainer = document.querySelector(".timer");

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

const timer = makeTimer();

const getRandomNum = (max, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

const isCorrectSelectedQuestion = (
  answerSelected,
  rightAnswer,
  config = { mode: HARD_MODE }
) => {
  if (
    config.mode === HARD_MODE &&
    (answerSelected.length < rightAnswer.length ||
      answerSelected.length > rightAnswer.length)
  )
    return false;

  answerSelected.forEach((answer) => {
    if (!rightAnswer.includes(answer.value)) return false;
  });

  return true;
};

const submitAnswer = (question, config = { increaseScore: 1 }) => {
  timer.stop();

  if (question.type === CONSTRUCTED_RESPONSE) return;

  const answerSelected = document.querySelectorAll("input:checked");

  if (isCorrectSelectedQuestion(answerSelected, question.correct))
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
  const question = renderQuestion();
  renderAnswer(question);
};

const getAnswerType = (question) =>
  question.correct.length > 1 ? CHECKBOX_TYPE : RADIO_TYPE;

const renderQuestion = () => {
  const rndQuestionIndex = getRandomNum(QUESTION_DATA.length);
  const newQuestion = QUESTION_DATA[rndQuestionIndex];
  questionContainer.innerHTML = newQuestion.question;

  submitButton.onclick = () => {
    submitAnswer(newQuestion);
    submitButton.onclick = "";
  };

  return newQuestion;
};

const renderAnswer = (
  question,
  config = { name: "answer", placeholder: "Type here", textType: TEXT_TYPE }
) => {
  let child;
  if (question.type === SELECTED_RESPONSE) {
    const inputType = getAnswerType(question);
    child = question.answers
      .map(
        (
          answer
        ) => `<input type="${inputType}" id="${answer}" name="${config.name}" value="${answer}" />
    <label for="${answer}">${answer}</label><br />`
      )
      .join("");
  } else {
    child = `<input type="${config.textType}" placeholder="${config.placeholder}" />`;
  }
  answerContainer.innerHTML = child;
};
