import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import MessageInput from './MessageInput';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MessageInput />', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<MessageInput />);
    expect(wrapper).to.have.length(1);
  });

});