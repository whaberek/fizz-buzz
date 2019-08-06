import styled from 'styled-components';

import { colors } from 'shared/constants';

const Item = styled.span`
  color: ${({ color }) => (color ? color : colors.black)}
`;

export { Item };
