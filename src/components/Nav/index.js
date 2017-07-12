import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import SearchBar from '../SearchBar';

function Nav({ history }) {
  return (
    <div className="search-bar">
      <span className="title">Crypto Grid</span>
      <SearchBar onSearchTermChange={value => history.push({ search: `?search=${value}` })} />
    </div>
  );
}

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default withRouter(Nav);
