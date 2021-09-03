import { apiQUESTIONS, apiTOKEN } from './services'; 

export const USER_ACT = 'USER_ACT';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const QUESTIONS_LOADING = 'QUESTIONS_LOADING';
export const QUESTIONS_OK = 'QUESTIONS_OK';
export const QUESTIONS_ERROR = 'QUESTIONS_ERROR';

export const userAct = (payload) => ({
  type: USER_ACT, payload,
});

apiTOKEN();

apiQUESTIONS();
