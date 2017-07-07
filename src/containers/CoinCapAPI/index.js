import React from 'react';
import io from 'socket.io-client';
import 'whatwg-fetch'; // makes 'fetch' work in all browsers https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
import CoincapTable from '../../components/CoincapTable';

const apiURL = 'http://socket.coincap.io';
const socket = io(apiURL);

export default class CoinCapAPI extends React.PureComponent {

  constructor() {
    super();
    this.state = {};

    fetch(`${apiURL}/front`)
    .then(response => response.json())
    .then(data => console.log(data));

    socket.on('trades', (tradesData) => {
      console.log(data);
    //   // occur very often and very fast
    //   // tradesData contains info on a trade. You should update the table with this info.
    // });
    // socket.on('global', (data) => {
    //   console.log(data);
      // occur more slowly
      // data contains the global message data. Not entirely sure what it's used for.
    });
  }
  render() {
    return (
      <div>
        <CoincapTable data={this.state} />
      </div>
    );
  }
}
