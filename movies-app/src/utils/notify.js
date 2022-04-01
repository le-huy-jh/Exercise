export const notify = (subject) => {
  return {
    failedMessage: `Fetch ${subject} failed.`,
  };
};
