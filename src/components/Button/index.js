import React, { Children } from 'react';

import './Button.css';

// eslint-disable-next-line import/prefer-default-export,react/button-has-type,react/destructuring-assignment
export const Button = (props) => <button {...props}>{Children.toArray(props.children)}</button>;
