import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui search">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Enter category"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <i className="search icon" />
          </div>
          <div className="results" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
