import React from 'react';
import io from 'socket.io-client';
import CoincapTable from '../../components/CoincapTable';


export default class CoinCapAPI extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const socket = io('http://socket.coincap.io');
    socket.on('connection', () => console.log(socket.id));
    socket.on('/coins', (data) => {
      this.setState(data);
      console.log(data);
    });
    return (
      <div>
        <CoincapTable data={this.state} />
      </div>
    );
  }
}
