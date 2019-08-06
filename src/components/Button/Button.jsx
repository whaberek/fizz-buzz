import React from 'react';

const Button = props => (
  <button {...props}>{props.label}</button>
);

export { Button };
