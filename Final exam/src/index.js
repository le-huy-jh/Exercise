import CONSTANT from "./constant";
import { QUESTION_DATA as data } from "./data";
import { getContainers } from "./getContainers";
import { getRandomNum } from "./utils";
import { makeTimer } from "./makeTimer";
const app = (config) => {
  const {
    questionId = ".question",
    answerId = ".answer",
    scoreId = ".score span",
    submitButtonId = ".submit",
    resetButtonId = ".reset",
    timerId = ".timer",
    mode = CONSTANT.HARD_MODE,
    increaseScore = 1,
    questionClass = "",
    name = "answer",
    placeholder = "Type here",
    constructedResponseType = CONSTANT.TEXT_TYPE,
    constructedResponseInputClass = "",
    selectedResponseInputClass = "",
    selectedResponseLabelClass = "",
    QUESTION_DATA = data,
  } = config;
  const {
    questionContainer,
    answerContainer,
    scoreContainer: score,
    submitButtonContainer: submitButton,
    resetButtonContainer: resetButton,
    timerContainer,
  } = getContainers({
    questionId,
    answerId,
    scoreId,
    submitButtonId,
    resetButtonId,
    timerId,
  });

  const timer = makeTimer(timerContainer);

  const isCorrectSelectedQuestion = (answerSelected, rightAnswer) => {
    if (
      mode === CONSTANT.HARD_MODE &&
      (answerSelected.length < rightAnswer.length ||
        answerSelected.length > rightAnswer.length)
    )
      return false;

    for (let index = 0; index < answerSelected.length; index++) {
      if (!rightAnswer.includes(answerSelected[index].value)) {
        return false;
      }
    }

    return true;
  };

  const submitAnswer = (question) => {
    timer.stop();

    if (question.type === CONSTANT.CONSTRUCTED_RESPONSE) return;

    const answerSelected = document.querySelectorAll("input:checked");

    if (isCorrectSelectedQuestion(answerSelected, question.correct)) {
      score.innerHTML = +score.innerHTML + increaseScore;
    }
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
    question.correct.length > 1 ? CONSTANT.CHECKBOX_TYPE : CONSTANT.RADIO_TYPE;

  const renderQuestion = () => {
    const rndQuestionIndex = getRandomNum({ max: QUESTION_DATA.length });
    const newQuestion = QUESTION_DATA[rndQuestionIndex];
    if (questionClass !== "") questionContainer.classList.add(className);
    questionContainer.innerHTML = newQuestion.question;

    submitButton.onclick = () => {
      submitAnswer(newQuestion);
      submitButton.onclick = "";
    };

    return newQuestion;
  };

  const renderAnswer = (question) => {
    let child;

    if (question.type === CONSTANT.SELECTED_RESPONSE) {
      const inputType = getAnswerType(question);
      child = question.answers
        .map(
          (
            answer
          ) => `<input class="${selectedResponseInputClass}" type="${inputType}" id="${answer}" name="${name}" value="${answer}" />
      <label class="${selectedResponseLabelClass}" for="${answer}">${answer}</label><br />`
        )
        .join("");
    } else {
      child = `<input class="${constructedResponseInputClass}" type="${constructedResponseType}" placeholder="${placeholder}" />`;
    }
    answerContainer.innerHTML = child;
  };
};

app({ mode: CONSTANT.EASY_MODE });
