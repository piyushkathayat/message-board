import {
    getPost,
    addPost,
    deletePost,
    editPost,
    updatePost
    } from '../Actions';
import ActionTypes from '../ActionTypes';

const getInitState = () => [{
    author: "loggedInUser",
    id: 1,
    message: "hello",
    parentId: null
}];

describe('application actions', () => {
    it('action for get post', () => {
        const initialAction = { type: ActionTypes.GET_POST };
        const actualResult = getPost();
        expect(actualResult).toEqual(initialAction);
    });

    it('action for add post', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.ADD_POST, post:detail };
        const actualResult = addPost(detail);
        expect(actualResult).toEqual(initialAction);
    });

    it('action for delete post', () => {
        const id = 1;
        const initialAction = { type: ActionTypes.DELETE_POST, id };
        const actualResult = deletePost(id);
        expect(actualResult).toEqual(initialAction);
    });

    it('action for edit post', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.EDIT_POST, detail };
        const actualResult = editPost(detail);
        expect(actualResult).toEqual(initialAction);
    });

    it('action for update post', () => {
        const detail = getInitState();
        const initialAction = { type: ActionTypes.UPDATE_POST, detail };
        const actualResult = updatePost(detail);
        expect(actualResult).toEqual(initialAction);
    });

});