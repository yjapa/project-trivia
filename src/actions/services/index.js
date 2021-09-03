/* API - Token */

const requestApi = () => ({
  type: REQUEST_TOKEN, status: 'Loading',
});
const receiveApi = (payload) => ({
  type: RECEIVE_TOKEN, payload,
});
const requestError = () => ({
  type: REQUEST_ERROR, status: 'Fail',
});

export function apiTOKEN() {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://opentdb.com/api_token.php?command=request');
      const token = await response.json();
      return dispatch(receiveApi(token));
    } catch (error) {
      return dispatch(requestError());
    }
  };
}

/* API - Questions */

const questionsApi = () => ({
  type: QUESTIONS_LOADING, status: 'Loading',
});

const questionsApiOk = (payload) => ({
  type: QUESTIONS_OK, payload,
});

const questionsApiError = () => ({
  type: QUESTIONS_ERROR, status: 'Fail',
});

export function apiQUESTIONS(token) {
  return async (dispatch) => {
    try {
      dispatch(questionsApi());
      const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      const questions = await response.json();
      return dispatch(questionsApiOk(questions));
    } catch (error) {
      return dispatch(questionsApiError(error));
    }
  }
}
