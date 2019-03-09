import ActionTypes from '../../actions/ActionTypes';
import post from '../post';
import expect from 'expect';
import { mockData } from '../../sagas/mockData';

const getInitialState = () => [{
    author: 1,
    parentId: null,
    message: 'test message',
    id: 1,
    reply: []
},
{
    author: 1,
    parentId: null,
    message: 'test message',
    id: 2,
    reply: []
}];

describe('Test Post Reducer', () => {
    it('it should return the initial state', () => {
        const initialState = [];
        const action = { type: '' };
        expect(post(initialState, action)).toEqual([]);
    });

    it('it should receive data from API', () => {
        const initialState = [];
        const action = {
                type: ActionTypes.POST_RECEIVED,
                getMockData: mockData()
            };
        const expected = post(initialState, action);
        expect(expected).toEqual([{
        id: 1,
        message: "A Thread",
        parentId: null,
        author: 1,
        reply: [{
            id: 2,
            message: "A Reply",
            parentId: 1,
            author: 1
        }]
    }]);
    });

    it('it should add a new posts', () => {
        const initialState = [];
        const message = {
                author: 1,
                parentId: 1,
                message: 'test message',
                id: 1,
                reply: []
            }
        const action = {
            type: ActionTypes.ADD_POST,
            post: message
        };
        const expected = post(initialState, action);
        expect(expected).toEqual([message]);
    });

    it('it should remove post', () => {
        const initialState = getInitialState();
        const action = { type: ActionTypes.DELETE_POST, id: 1 };
        const expected = post(initialState, action);
        expect(expected).toEqual([
            {
                author: 1,
                parentId: null,
                message: 'test message',
                id: 2,
                reply: []
            }
        ]);
    });

    it('it should edit post', () => {
        const initialState = getInitialState();
        const action = {
                type: ActionTypes.EDIT_POST,
                detail: { author: 1, id: 1, message: 'new message', parentId: null }
            };
        const expected = post(initialState, action);
        expect(expected).toEqual([{
            author: 1,
            parentId: null,
            message: 'new message',
            id: 1,
            reply: []
        },
        {
            author: 1,
            parentId: null,
            message: 'test message',
            id: 2,
            reply: []
        }])
    });

    it('it should update main post with replies', () => {
        const initialState = getInitialState();
        const action = {
                type: ActionTypes.UPDATE_POST,
                detail: { author: 1, id: 3, message: 'my reply', parentId: 2 }
            };
        const expected = post(initialState, action);
        expect(expected).toEqual([{
            author: 1,
            parentId: null,
            message: 'test message',
            id: 1,
            reply: []
        },
        {
            author: 1,
            parentId: null,
            message: 'test message',
            id: 2,
            reply: [{ author: 1, id: 3, message: 'my reply', parentId: 2 }]
        }])
    });
});