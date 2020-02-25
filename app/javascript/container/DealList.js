import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getDeals from '../actions/dealsAction';

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
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          deals: json,
        });
      });
  }

  render() {
    const { deals, isLoaded } = this.state;
    const { getDeals } = this.props;
    getDeals(deals);

    if (!isLoaded) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div>
        <div className="outerContainer">
          <div className="menuContainer">
            <Link to="/">Home</Link>
            <Link to="/lifestyle">Lifestyle</Link>
          </div>
          <div className="outerDeals">
            <h1>All Trips</h1>
            <div className="dealsContainer">
              {deals.map(deal => (
                <div className="card" key={deal.id}>
                  <img className="smallImg" src={deal.image_url} alt="" />
                  <div className="container">
                    <Link to={`/deals/${deal.id}`}>
                      {deal.deal_name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getDeals: deals => dispatch(getDeals(deals)),
});


export default connect(null, mapDispatchToProps)(DealList);
