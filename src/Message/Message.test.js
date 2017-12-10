import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Message from './Message';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Message />', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Message />);
    expect(wrapper).to.have.length(1);
  });

});