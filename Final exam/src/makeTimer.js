import CONSTANT from "./constant";
export const makeTimer = (
  timerContainer,
  config = { time: CONSTANT.DEFAULT_TIME, initialValue: 0 }
) => {
  let intervalId;
  let count = config.initialValue;
  return {
    start: () => {
      intervalId = setInterval(() => {
        timerContainer.innerHTML = count++;
      }, config.time);
    },
    stop: () => {
      clearInterval(intervalId);
    },
  };
};
