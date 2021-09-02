// const requestApi = () => ({
//   type: 'REQUEST_MOEDAS', status: 'Loading',
// });
// const receiveApi = (payload) => ({
//   type: 'RECEIVE_MOEDAS', payload,
// });
// const requestError = () => ({
//   type: 'REQUEST_ERROR', status: 'Fail',
// });

// export function apiTOKEN() {
//   return async (dispatch) => {
//     try {
//       dispatch(requestApi());
//       const response = await fetch('https://opentdb.com/api_token.php?command=request');
//       const token = await response.json();
//       return dispatch(receiveApi(token));
//     } catch (error) {
//       return dispatch(requestError());
//     }
//   };
// }
