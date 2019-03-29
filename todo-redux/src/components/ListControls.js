import React from 'react';

import { connect } from 'react-redux';
import { clearAll, completeAll } from '../actions';

const ListControls = ({ clearAll, completeAll }) => {
  return (
    <div>
      <button onClick={() => clearAll()}>Clear All</button>
      <button onClick={() => completeAll()}>Complete All</button>
    </div>
  );
};

export default connect(
  null,
  {
    clearAll,
    completeAll
  }
)(ListControls);
