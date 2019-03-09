import React from 'react';
import { shallow } from 'enzyme';
import ReplyList from '../ReplyList';

const getReplies = () => [{
            author: "loggedInUser",
            id: 2,
            message: "reply",
            parentId: 1
        },
        {
            author: "loggedInUser",
            id: 3,
            message: "next reply",
            parentId: 1
        }];

describe('Test reply list', () => {
    const replies = getReplies();
    const wrapper = shallow(<ReplyList replies={replies}/>);
    const list = wrapper.find('List');

    it('it should render all replies', () => {
        expect(list).toBeDefined();
        expect(wrapper.find('.replyItem')).toHaveLength(replies.length);
    })

    it('it should render author and message', () => {
        expect(wrapper.find('.replyItem > .author')).toBeDefined();
        expect(wrapper.find('.replyItem > .replyMessage').get(0).props.children).toEqual('reply');
    })
});
