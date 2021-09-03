const INITIAL_STATE = {

};

const game = (state = initialState, action) => {
  switch (action.type) {
  case 'REQUEST_TOKEN':
    return { ...state, ...action.payload };
  case 'RECEIVE_TOKEN':
    return { ...state, ...action.payload };
  case 'REQUEST_ERROR':
    return { ...state, ...action.payload };
  case 'QUESTIONS_LOADING':
    return { ...state, ...action.payload };
  case 'QUESTIONS_OK':
    return { ...state, ...action.payload };
  case 'QUESTIONS_ERROR':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default game;
