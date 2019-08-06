import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('should render layout with children', () => {
    const wrapper = shallow(<ListItem>foo</ListItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render layout without children', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
