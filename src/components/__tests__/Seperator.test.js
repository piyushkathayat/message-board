import React from 'react';
import { shallow } from 'enzyme';
import { Separator } from '../Separator';

describe('Test Separator', () => {
    const wrapper = shallow(<Separator />);
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
