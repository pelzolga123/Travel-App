import React from 'react';
import PropTypes from 'prop-types';

const Deal = ({ deals }) => (
  <div>
    <p>{deals.id}</p>
    <h1>{deals.deal_name}</h1>
  </div>
);

Deal.propTypes = {
  deals: PropTypes.shape({
    id: PropTypes.number,
    deal_name: PropTypes.string,
  }).isRequired,
};

export default Deal;
