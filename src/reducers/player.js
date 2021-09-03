const INITIAL_STATE = {
  name: '',
  score: 0,
  picture: '',
  token: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INFO_PLAYER':
    return {
      ...state,
      name: action.payload,
    };
  case 'TOKEN_PLAYER':
    return {
      ...state, token: action.payload,
    };
  default:
    return state;
  }
};

export default player;
