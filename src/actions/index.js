const INFO_PLAYER = 'INFO_PLAYER';
const GET_QUESTIONS = 'GET_QUESTIONS';

export const infoPlayer = (payload) => ({
  type: INFO_PLAYER, payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS, payload,
});
