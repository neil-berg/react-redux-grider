import React from 'react';

import ItemInput from './ItemInput';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemInput />
        <ItemList />
      </div>
    );
  }
}

export default App;
