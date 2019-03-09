import {
    getPost,
    addPost,
    deletePost,
    editPost,
    updatePost
    } from '../actions';
import ActionTypes from '../ActionTypes';

const getInitState = () => [{
    author: "loggedInUser",
    id: 1,
    message: "hello",
    parentId: null
}];

describe('Test all actions', () => {
    it('it test get post action', () => {
        const initialAction = { type: ActionTypes.GET_POST };
        const actualResult = getPost();
        expect(actualResult).toEqual(initialAction);
    });

    it('it test add post action', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.ADD_POST, post:detail };
        const actualResult = addPost(detail);
        expect(actualResult).toEqual(initialAction);
    });

    it('it test delete post action', () => {
        const id = 1;
        const initialAction = { type: ActionTypes.DELETE_POST, id };
        const actualResult = deletePost(id);
        expect(actualResult).toEqual(initialAction);
    });

    it('it test edit post action', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.EDIT_POST, detail };
        const actualResult = editPost(detail);
        expect(actualResult).toEqual(initialAction);
    });

    it('it test update post action', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.UPDATE_POST, detail };
        const actualResult = updatePost(detail);
        expect(actualResult).toEqual(initialAction);
    });

});