import React from 'react';

import './Button.css';

const Button = props => {
  const buttonClassses = `button ${props.isFocused ? "focused" : ""}`

  return (
    <button type={props.type} className={buttonClassses} onClick={props.onClick} >
      {props.children}
    </button>
  );
};

export default Button;
