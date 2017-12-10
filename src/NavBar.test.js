import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import NavBar from './NavBar';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NavBar />', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).to.have.length(1);
  });

});