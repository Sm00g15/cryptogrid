import React from 'react';
import 'whatwg-fetch'; // makes 'fetch' work in all browsers https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const apiURL = 'http://socket.coincap.io';

export default class CoinDetails extends React.PureComponent {

  constructor() {
    super();
    this.state = {};

    fetch(`${apiURL}/front`)
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div />
    );
  }
}
