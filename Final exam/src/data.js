import CONSTANT from "./constant";

export const QUESTION_DATA = [
  {
    type: CONSTANT.SELECTED_RESPONSE,
    question: "How Long Is One Day on Other Planets?",
    answers: ["12", "24", "36", "55"],
    correct: ["24"],
  },
  {
    type: CONSTANT.SELECTED_RESPONSE,
    question: "Where Does the Sun Rise?",
    answers: ["East", "West", "South", "North"],
    correct: ["East"],
  },
  {
    type: CONSTANT.SELECTED_RESPONSE,
    question: "Where Does the Sun set?",
    answers: ["East", "West", "South", "North"],
    correct: ["West"],
  },
  {
    type: CONSTANT.CONSTRUCTED_RESPONSE,
    question: "What is your name?",
  },
  {
    type: CONSTANT.SELECTED_RESPONSE,
    question: "Which is animal?",
    answers: ["dog", "table", "turtle", "car"],
    correct: ["dog", "turtle"],
  },
  {
    type: CONSTANT.CONSTRUCTED_RESPONSE,
    question: "How old are you?",
  },
];
