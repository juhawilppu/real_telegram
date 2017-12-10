import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Messages from './Messages';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Messages />', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<Messages />);
    expect(wrapper).to.have.length(1);
  });

});