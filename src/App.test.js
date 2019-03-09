import React from 'react';
import { shallow } from 'enzyme';
import MessageBoard from "./containers/MessageBoard";
import App from './App';

// TODO: move to CONST
const MESSAGE_HEADER = 'Public Message Board';

it('it renders Message board without crashing', () => {
  const wrapper = shallow(<App />);
  const header = <div>{MESSAGE_HEADER}</div>
  expect(wrapper.contains(header)).toEqual(true);
  expect(wrapper.contains(<MessageBoard />)).toEqual(true);
});
