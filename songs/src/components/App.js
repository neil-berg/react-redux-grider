import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import styled from 'styled-components';

const SongContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  align-items: center;
`;

const App = () => {
  return (
    <SongContainer>
      <SongList />
      <SongDetail />
    </SongContainer>
  );
};

export default App;
