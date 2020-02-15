import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
  render() {
    const data = 'Testing new component';
    return (
      <>
        <h2>{data}</h2>
      </>
    );
  }
}

export default Test;
