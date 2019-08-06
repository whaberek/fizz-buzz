import React from 'react';
import { shallow } from 'enzyme';

import { Item } from './Item';

import { colors } from 'shared/constants';

describe('Item', () => {
  it('should render layout with default color', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render layout with color passed in props', () => {
    const wrapper = shallow(<Item color={colors.green} />);
    expect(wrapper).toMatchSnapshot();
  });
});
