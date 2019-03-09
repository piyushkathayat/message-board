import React from 'react';
import { shallow } from 'enzyme';
import MessageBoard from "./containers/MessageBoard";
import { MESSAGE_HEADER } from './constants/common';
import App from './App';

describe('Test App render without crashing', () => {
  const wrapper = shallow(<App />);

  it('it should render header with app name', () => {
    const header = <div>{MESSAGE_HEADER}</div>
    expect(wrapper.contains(header)).toEqual(true);
    expect(wrapper.contains(<MessageBoard />)).toEqual(true);
  });

  it('it should render MessageBoard', () => {
    expect(wrapper.contains(<MessageBoard />)).toEqual(true);
  });
});
