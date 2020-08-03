import React from 'react';

// styles
import './buttonIcon.scss';

// carbon core
import Button from 'carbon-components-react/lib/components/Button';

function ButtonIcon({ icon, onClick }) {
  return (
    <Button size="small" kind="ghost" renderIcon={icon} onClick={onClick} />
  );
}

export default ButtonIcon;
