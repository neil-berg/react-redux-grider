import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.ul`
  width: 100%;
  margin: 1em auto;
  padding: 0;
  border: 1px grey solid;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px grey solid;
  padding: 0.5em;

  p {
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0.45em 0.65em;
    background: dodgerblue;
    color: white;
    border-radius: 3px;
  }

  button:hover {
    background: #4286f4;
  }
`;

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <ListItem key={song.title}>
          <p className="title">{song.title}</p>
          <button
            className="select"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <ListContainer className="songlist-container">
        {this.renderList()}
      </ListContainer>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong
  }
)(SongList);
