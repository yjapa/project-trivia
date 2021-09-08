const INFO_PLAYER = 'INFO_PLAYER';
const GET_QUESTIONS = 'GET_QUESTIONS';
const GET_SCORE = 'GET_SCORE';

export const infoPlayer = (payload) => ({
  type: INFO_PLAYER, payload,
});

export const scorePlayer = (payload) => ({
  type: GET_SCORE, payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS, payload,
});

