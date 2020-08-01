import React from 'react';

function LayoutHeader() {
  return (
    <div className="header__container">
      <div className="header__logo" />
      <div className="header__right">
        <img
          className="header__avatar"
          src="./assets/images/avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default LayoutHeader;
