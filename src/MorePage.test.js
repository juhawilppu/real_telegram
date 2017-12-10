import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import MorePage from './MorePage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MorePage />', function () {
  it('should render without crashing', function () {
    const wrapper = shallow(<MorePage />);
    expect(wrapper).to.have.length(1);
  });

});