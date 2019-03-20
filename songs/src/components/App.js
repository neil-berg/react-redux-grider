import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SongYears from './SongYears';
import styled from 'styled-components';

const SongContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  align-items: center;
`;

const App = () => {
  return (
    <div>
      <SongContainer>
        <SongList />
        {/* <SongDetail /> */}
        <SongYears />
      </SongContainer>
      <button>90's songs</button>
    </div>
  );
};

export default App;
