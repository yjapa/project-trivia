const INITIAL_STATE = {
  name: '',
  score: '',
  picture: '',
  token: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PLAYER_ACT':
    return { ...state, ...action.payload };
  case 'TOKEN_PLAYER':
    return {
      ...state, token: action.payload };
  default:
    return state;
  }
};

export default player;
