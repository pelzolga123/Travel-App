import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Deal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/deals/${id}`)
      .then(response => response.json())
      .then(deal => {
        this.setState({
          deal,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { deal } = this.state;
    return (
      <div className="outerContainer">
        <div className="menuContainer">
          <Link to="/">Home</Link>
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
  match: PropTypes.number.isRequired,
};


export default Deal;
