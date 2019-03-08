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

describe('test common utility', () => {
    it('it returns unique id', () => {
        const messages = getMessages();
        const actualResult = getUniqueId(messages);
        expect(actualResult).toEqual(4);
    });
});
