import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';

export default function Nav({ handleSearchTermChange }) {
  return (
    <nav className="search-bar">
      <span className="title">Crypto Grid</span>
      <SearchBar onSearchTermChange={handleSearchTermChange} />
    </nav>
  );
}

Nav.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
};
