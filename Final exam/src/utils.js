export const getRandomNum = (config = { max, min }) => {
  const {max, min = 0} = config
  return Math.floor(Math.random() * (max - min)) + min;
};
