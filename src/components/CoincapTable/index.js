import React from 'react';
import PropTypes from 'prop-types';

// dumb components don't need the Class syntax so can be just a function like this.
export default function CoincapTable(props) {
  console.log(props);
  return (
    <div>
      {props.data &&
        <div>
          <h1>It Works!</h1>
          <p>Enjoy!</p>
        </div>
      }

    </div>
  );
}

CoincapTable.propTypes = {
  data: PropTypes.String, // just an example
};
