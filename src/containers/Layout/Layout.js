import React from 'react';
import { Layout } from 'antd';

import LayoutHeader from './LayoutHeader';

const { Header, Content } = Layout;

function LayoutMain({ children }) {
  return (
    <Layout>
      <Header className="header__container">
        <LayoutHeader />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
}

export default LayoutMain;
