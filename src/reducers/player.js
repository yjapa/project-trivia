const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
  picture: '',
  token: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INFO_PLAYER':
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
    };
  case 'GET_SCORE':
    return {
      ...state, score: action.payload.score,
    };
  case 'TOKEN_PLAYER':
    return {
      ...state, token: action.payload,
    };
  case 'GET_URL':
    return {
      ...state, picture: action.payload,
    };
  default:
    return state;
  }
};

export default player;
