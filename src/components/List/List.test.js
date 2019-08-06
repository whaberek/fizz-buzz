import React from 'react';
import { shallow } from 'enzyme';

import { List } from './List';

import { Item } from 'components/Item/Item'

describe('List', () => {
  const props = {
    data: [
      <Item>foo</Item>,
      <Item>bar</Item>,
      <Item>baz</Item>,
    ],
  };

  it('should render layout', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 3 ListItem items when listItems contains 3 elements', () => {
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find(Item)).toHaveLength(3);
  });
});
