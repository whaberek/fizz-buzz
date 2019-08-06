import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe('Input', () => {
  it('should render layout', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
