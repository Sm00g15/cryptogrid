import React from 'react';
import PropTypes from 'prop-types';

export default function CoinDetails({ coin }) {
  return (
    <div>
      <img alt="coin logo" src={`http://www.coincap.io/images/coins/${coin.long}.png`} />
      <h1> {coin.long} HI! </h1>
      {/* <a className="btn btn-lg btn-default" href="https://localbitcoins.com/country/NZ?ch=3qoy">Buy Bitcoin</a>
      <button className="btn btn-lg btn-default" src="poloniex">Buy Coin Here</button> */}
      {/* <button className="btn btn-lg btn-default"
      src="shapeshift affiliate soon to come">Shapeshift Here</button> */}
      {/* <button
          className="btn btn-lg btn-default"
          src="https://www.bitmex.com/register/GYx0CT"
      >Trade Coin Here</button> */}
    </div>
  );
}

CoinDetails.propTypes = {
  coin: PropTypes.shape({
    long: PropTypes.string,
  }).isRequired,
};
