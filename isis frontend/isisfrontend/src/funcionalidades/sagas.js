import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../services/api'
import { signInSuccess, signInFailure,saveUser  } from './actions';
import history from '../services/history';
import { useSelector } from 'react-redux';

function* signIn({ payload }) {
  try {
const { email, password } = payload;
const response = yield call(api.post, 'sessions', {
 email,
 password,
});
const { token, user, nascimento } = response.data;
const nasc=nascimento.nascimento
console.log(nasc)
console.log(api.defaults.headers)
    yield put(saveUser(user,nasc))
    yield put(signInSuccess(token, nasc));
    history.push('/tela2');
    history.go('/tela2');
    localStorage.setItem("token",token);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function setToken({payload}){
  if(!payload) return;
  const{token}=payload.auth;
  if(token){
    api.defaults.headers.Authorization=`Bearer ${token}`
  }
  
  }
  export function signOut(){
  history.push('/')
  history.go('/')
  }
export default function* authSaga() {

  yield takeLatest('SIGN_IN_REQUEST', signIn);
  yield takeLatest('SIGN_OUT', signOut);
}