import React from 'react';

import LayoutHeader from './LayoutHeader';

function LayoutMain({ children }) {
  return (
    <div>
      <header>
        <LayoutHeader />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default LayoutMain;
