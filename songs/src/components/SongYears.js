import React from 'react';
import { connect } from 'react-redux';

const SongYears = ({ song }) => {
  {
    return song ? <div>{song.year}</div> : null;
  }
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongYears);
