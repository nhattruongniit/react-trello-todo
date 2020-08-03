import React from 'react';

// style
import './header.style.scss';

// components
import Avatar from 'components/atoms/Avatar';

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo" />
      <div className="header__right">
        <div className="header__avatar">
          <Avatar src="./assets/images/avatar.png" />
        </div>
      </div>
    </div>
  );
}

export default Header;
