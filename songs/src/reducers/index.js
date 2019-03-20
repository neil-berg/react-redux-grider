import { combineReducers } from 'redux';

// Static, doesn't take in an action
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05', year: 1983 },
    { title: 'Macarena', duration: '2:30', year: 1985 },
    { title: 'All Star', duration: '3:15', year: 1990 },
    { title: 'I Want It That Way', duration: '1:45', year: 1999 }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
