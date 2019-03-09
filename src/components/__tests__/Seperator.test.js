import React from 'react';
import { shallow } from 'enzyme';
import { Seperator } from '../Seperator';

describe('Test Seperator', () => {
    const wrapper = shallow(<Seperator />);
    const divider = wrapper.find('Divider');

    it('it should have divider and heading tag', () => {
        expect(divider).toBeDefined();
        expect(divider.find('h4')).toBeDefined();
    });

    it('it should render icon and message inside header', () => {
        expect(divider.find('h4 > Icon').exists()).toBe(true);
        expect(divider.find('h4 > span').text()).toEqual('Messages');
    })
});
