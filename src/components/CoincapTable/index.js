import React from 'react';
import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

// // dumb components don't need the Class syntax so can be just a function like this.
export default function CoincapTable({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>% 24hr</th>
            <th>Market Cap</th>
            <th>Available Supply</th>
            <th>24 Hour Volume</th>
          </tr>
        </thead>
        <tbody>
          { data && data.map(coin => (
            <tr key={coin.long}>
              <td>{coin.position24}</td>
              <td><img alt="coin icon" src={`http://www.coincap.io/images/coins/${coin.long}.png`} /> {coin.long}</td>
              <td>${coin.price}</td>
              <td>{coin.cap24hrChange}</td>
              <td>${coin.mktcap}</td>
              <td>{coin.supply}</td>
              <td>${coin.volume}</td>
            </tr>),
          )}
        </tbody>
      </table>
    </div>
  );
}

CoincapTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    long: PropTypes.string,
    position24: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cap24hrChange: PropTypes.string,
    mktcap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    supply: PropTypes.string,
    volume: PropTypes.string,
  })),
};

CoincapTable.defaultProps = {
  data: [],
};
