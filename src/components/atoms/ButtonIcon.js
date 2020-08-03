import React from 'react';

// styles
import './buttonIcon.style.scss';

function ButtonIcon({ icon: Component, onClick, color = "#393939" }) {
  return (
    <button type="button" onClick={onClick}>
      <Component fill={color} />
    </button>
  );
}

export default ButtonIcon;
