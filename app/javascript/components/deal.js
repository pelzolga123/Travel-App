import React from 'react';
import PropTypes from 'prop-types';

const Deal = ({ deal }) => (
  <div>
    <p>{deal.id}</p>
    <h1>{deal.deal_name}</h1>
  </div>
);

Deal.propTypes = {
  deal: PropTypes.shape({
    id: PropTypes.number,
    deal_name: PropTypes.string,
  }).isRequired,
};

export default Deal;
