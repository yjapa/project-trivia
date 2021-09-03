const INITIAL_STATE = {
  questions: [],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'QUESTIONS_LOADING':
    return { ...state, ...action.payload };
  case 'QUESTIONS_OK':
    return { ...state, questions: action.payload };
  // case 'QUESTIONS_ERROR':
  //   return { ...state, status: 'error' };
  default:
    return state;
  }
};

export default game;
