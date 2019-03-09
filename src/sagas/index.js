import { put, takeLatest, all, call } from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';
import { mockData } from './mockData';

const getMockData = mockData();

export function* fetchPost() {
    try {
        const response = yield call('https://mockapi/getPost')
        console.log("API Response", response);
        yield put({ type:ActionTypes.POST_RECEIVED, json: response.json()});
    } catch (e) {
        console.log('Error on API call : Get mockData');
        yield put({ type:ActionTypes.POST_RECEIVED, getMockData});
    }
  }

export function* actionWatcher() {
    yield takeLatest(ActionTypes.GET_POST, fetchPost)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
