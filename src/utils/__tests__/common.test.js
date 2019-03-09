import { getUniqueId } from '../common';

const getMessages = () => [{
    author: "loggedInUser",
    id: 1,
    message: "hello",
    parentId: null,
    reply: []
},
{
    author: "loggedInUser",
    id: 2,
    message: "hello",
    parentId: null,
    reply:[{
        author: "loggedInUser",
        id: 3,
        message: "hello",
        parentId: 2
    }] 
}];

describe('test common util functions', () => {
    it('it should return a unique id', () => {
        const messages = getMessages();
        const actualResult = getUniqueId(messages);
        expect(actualResult).toEqual(4);
    });

    it('it should return 1 if no messages', () => {
        const messages = [];
        const actualResult = getUniqueId(messages);
        expect(actualResult).toEqual(1);
    });
});
