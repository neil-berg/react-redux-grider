import React from 'react';

import ItemInput from './ItemInput';
import ItemList from './ItemList';
import ListControls from './ListControls';

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemInput />
        <ItemList />
        <ListControls />
      </div>
    );
  }
}

export default App;
