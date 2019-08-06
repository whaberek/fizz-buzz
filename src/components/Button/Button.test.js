import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

import { texts } from 'shared/constants';

describe('Button', () => {
  it('should render layout with label', () => {
    const wrapper = shallow(<Button label={texts.submit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render layout without label', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
