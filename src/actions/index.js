const INFO_PLAYER = 'INFO_PLAYER';
const GET_QUESTIONS = 'GET_QUESTIONS';
const GET_SCORE = 'GET_SCORE';
const GET_URL = 'GET_URL';
const RANKING_PLAYER = 'RANKING_PLAYER';

export const infoPlayer = (payload) => ({
  type: INFO_PLAYER, payload,
});

export const scorePlayer = (payload) => ({
  type: GET_SCORE, payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS, payload,
});

export const imagePlayer = (payload) => ({
  type: GET_URL, payload,
});

export const playerRanking = (payload) => ({
  type: RANKING_PLAYER, payload,
});
