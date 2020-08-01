import React from 'react';

// antd
import { Avatar } from 'antd';

function LayoutHeader() {
  return (
    <>
      <div className="header__logo" />
      <div className="header__right">
        <Avatar src="./assets/images/avatar.png" />
      </div>
    </>
  );
}

export default LayoutHeader;
