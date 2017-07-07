import React from 'react';
import PropTypes from 'prop-types';

// // dumb components don't need the Class syntax so can be just a function like this.
export default function CoincapTable({ data }) {
  console.log(data);
  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>%24hr</th>
          <th>Market Cap</th>
          <th>Available Supply</th>
          <th>24 Hour Volume</th>
          <th />
        </tr>
        <tr>
          <td>{data.position24}</td>
          <td>{data.long}</td>
          <td>{data.price}</td>
          <td>{data.cap24hrChange}</td>
          <td>{data.mktcap}</td>
          <td>{data.supply}</td>
          <td>{data.volume}</td>
        </tr>
      </table>
    </div>
  );
}

CoincapTable.propTypes = {
  data: PropTypes.String, // just an example
};
