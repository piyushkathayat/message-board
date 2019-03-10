import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../MessageList';
import { NO_POST_AVAILABLE } from '../../constants/common';

const initialMessage = [{
    id: 1,
    author: 1,
    parentId: null,
    message: 'test message',
    reply :[]
}];

describe('Message List test', () => {
    it('render label to display NO_POST message', () => {
        const message = [];
        const wrapper = shallow(<MessageList messages={message}/>);
        expect(wrapper.find('.messageList')).toHaveLength(1);
        expect(wrapper.find('.messageList > Label')).toBeDefined();
        expect(wrapper.find('.messageList > Label > h5').text()).toEqual(NO_POST_AVAILABLE);
    });

    it('render list of messages ', () => {
        const message = initialMessage;
        const wrapper = shallow(<MessageList messages={message}/>);
        expect(wrapper.find('.messageList')).toHaveLength(1);
        expect(wrapper.find('.messageList > List')).toBeDefined();
        expect(wrapper.find('.messageList > List > Label')).toBeDefined();
        expect(wrapper.find('.messageList > List > message')).toBeDefined();
    });
});
