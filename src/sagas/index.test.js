import ActionTypes from '../actions/ActionTypes';
import { takeLatest } from 'redux-saga/effects';
import { fetchPost, actionWatcher } from './index'

 describe('Test Saga', () => {
   it('it should dispatch action GET_POST ', () => {
     const generator = actionWatcher();
     expect(generator.next().value)
     .toEqual(takeLatest(ActionTypes.GET_POST, fetchPost));
     expect(generator.next().done).toBeTruthy();
   })

    // skipped - not a valid API.
   it.skip('should dispatch action "POST_RECEIVED" with result from API', () => {
      const mockResponse = { message: "Some content", id: 1 }; 
      const generator = fetchPost();
      generator.next();
      // expect(generator.next(mockResponse).value).toEqual(put({type:ActionTypes.POST_RECEIVED, json:mockResponse}))
      // expect(generator.next().done).toBeTruthy();
   })

 });
