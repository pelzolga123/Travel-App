import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getDeals from '../actions/dealsAction';

const mapStateToProps = state => ({
  deals: state.deals,
});

const findDeal = (id, data) => {
  let tmp;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].id.toString() === id) {
      tmp = data[i];
    }
  }
  return tmp;
};
class Deal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { deals } = this.props;
    const deal = findDeal(id, deals);

    return (
      <div className="outerContainer">
        <div className="menuContainer">
          <Link to="/">Home</Link>
          <Link to="/lifestyle">Lifestyle</Link>
        </div>
        <div className="outerDeal">
          <div className="innerImg">
            <img className="bigImg" src={deal.image_url} alt="" />
            <p>{deal.description}</p>
          </div>
          <div className="description">
            <h2>{deal.deal_name}</h2>
            <div className="date">
              <p>
                Date:
              </p>
              <p>
                {deal.date}
              </p>
            </div>
            <div className="price">
              <p>
                Price:
              </p>
              <p>
                {deal.price}
              </p>
            </div>
            <div className="location">
              <p>
                Location:
              </p>
              <p>
                {deal.location}
              </p>
            </div>
            <Link to={`${deal.id}/form`}>Book now</Link>
          </div>
        </div>
      </div>
    );
  }
}
Deal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  deals: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  getDeals: deals => dispatch(getDeals(deals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Deal);
