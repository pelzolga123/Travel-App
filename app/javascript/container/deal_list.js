import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Deal from '../components/deal';
import { fetchDeals } from '../actions/index';

class DealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('/deals')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoaded: true,
          deals: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { deals, isLoaded } = this.state;
    return (
    <div>{deals.map((item) => (<Deal key={item.id} deals={item} />))}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  deals: state.DealList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDeals: (deals) => dispatch(fetchDeals(deals)),
});

DealList.propTypes = {
  fetchDeals: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DealList);
