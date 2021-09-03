const requestApi = () => ({
  type: 'REQUEST_MOEDAS', status: 'Loading',
});
// const receiveApi = (payload) => ({
//   type: 'RECEIVE_MOEDAS', payload,
// });
const requestError = () => ({
  type: 'REQUEST_ERROR', status: 'Fail',
});
const receiveToken = (payload) => ({
  type: 'TOKEN_PLAYER', payload,
});

export default function apiTOKEN() {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const token = await response.json();
      localStorage.setItem('token', JSON.stringify(token.token));
      return dispatch(receiveToken(token.token));
    } catch (error) {
      return dispatch(requestError());
    }
  };
}
