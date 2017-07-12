import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch'; // makes 'fetch' work in all browsers https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const apiURL = 'http://coincap.io';

export default class CoinDetails extends React.PureComponent {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        coinName: PropTypes.string,
      }),
    }).isRequired,
    coin: PropTypes.object,
  }

  static defaultProps = {
    coin: {},
  }

  constructor(props) {
    super(props);

    if (!props.coin.long) {
      const coinName = props.match.params.coinName; // {}
      this.state = {};

      fetch(`${apiURL}/front/${coinName}`)
      .then(response => response.json())
      .then((data) => { this.state.data = data; console.log(data); });
    }
  }

  render() {
    const data = this.state.data || this.props.coin;
    return (
      <div>
        <img alt="coin logo" src={`http://www.coincap.io/images/coins/${data.long}.png`} />
        <h1> {data.long} </h1>
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
}
