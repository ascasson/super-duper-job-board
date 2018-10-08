import React, { Children } from 'react';

import './Button.css';

export const Button = props => (
  <button {...props}>
    {Children.toArray(props.children)}
  </button>
)