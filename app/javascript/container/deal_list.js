import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Deal from '../components/deal';

class DealList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { deal } = this.props;
    return (
      <div>{deal.map((item) => (<Deal key={item.id} deal={item} />))}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  deal: state.deal,
});

DealList.propTypes = {
  deal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      deal_name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(DealList);
