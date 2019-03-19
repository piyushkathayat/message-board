import { put, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';
// import { mockData } from './mockData';
// const getMockData = mockData();

const GET_MOCK_DATA = 'http://www.mocky.io/v2/5c9089da3300004e006496d1';

export function* fetchPost() {
    try {
        const response = yield fetch(GET_MOCK_DATA)
        .then(response => response.json(), );
        yield put({ type:ActionTypes.POST_RECEIVED, getMockData: response});
    } catch (e) {
        console.log('Error on API call : Get mockData');
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
