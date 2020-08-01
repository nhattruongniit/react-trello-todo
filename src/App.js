import React from 'react';

import Todo from 'features/Todo';
import Layout from 'containers/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
}

export default App;
