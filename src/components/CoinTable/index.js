import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NumericLabel from 'react-pretty-numbers';
// import InfiniteScroll from 'react-infinite-scroll-component';

// // dumb components don't need the Class syntax so can be just a function like this.
export default function CoinTable({ data }) {
  const numParams = {
    shortFormat: true,
    shortFormatPrecision: 1,
    title: true,
  };
  const currencyParams = Object.assign({}, numParams, { currency: true });
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
              <td>
                <Link to={`/${coin.short}`} >
                  <img alt="coin icon" src={`http://www.coincap.io/images/coins/${coin.long}.png`} />
                  {coin.long}
                </Link>
              </td>
              <td><NumericLabel params={currencyParams}>{coin.price}</NumericLabel></td>
              <td><NumericLabel params={numParams}>{coin.cap24hrChange}</NumericLabel></td>
              <td><NumericLabel params={currencyParams}>{coin.mktcap}</NumericLabel></td>
              <td><NumericLabel params={numParams}>{coin.supply}</NumericLabel></td>
              <td><NumericLabel params={currencyParams}>{coin.volume}</NumericLabel></td>
            </tr>),
          )}
        </tbody>
      </table>
    </div>
  );
}

CoinTable.propTypes = {
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

CoinTable.defaultProps = {
  data: [],
};
