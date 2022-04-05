export const getRandomNum = (config) => {
  const {max, min = 0} = config
  return Math.floor(Math.random() * (max - min)) + min;
};
