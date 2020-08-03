import React from 'react';

import Header from './Header';

function LayoutMain({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default LayoutMain;
