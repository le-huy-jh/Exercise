export const getContainers = (config) => {
  return {
    questionContainer: document.querySelector(config.questionId),
    answerContainer: document.querySelector(config.answerId),
    scoreContainer: document.querySelector(config.scoreId),
    submitButtonContainer: document.querySelector(config.submitButtonId),
    resetButtonContainer: document.querySelector(config.resetButtonId),
    timerContainer: document.querySelector(config.timerId),
  };
};
