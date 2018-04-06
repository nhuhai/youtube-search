import React, { Component } from 'react';
import './search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.setState({ term: event.target.value })}
          value={this.state.term} />
      </div>
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
