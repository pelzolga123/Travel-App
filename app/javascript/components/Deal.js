import React from 'react';
import { Link } from 'react-router-dom';

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
        console.log(deal);
        this.setState({
          deal,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { deal } = this.state;
    return (
      <div className="outerContainer">
        <div className="menuContainer">
          <Link to="/">Home</Link>
          <Link to={`${deal.id}`}>Deal</Link>
        </div>
        <img className="bigImg" src={deal.image_url} alt="" />
        <div className="description">
          <h1>{deal.deal_name}</h1>
          <p>
            Date:
            {deal.date}
          </p>
          <h3>Description</h3>
          <p>{deal.description}</p>
          <p>
            Price:
            {deal.price}
          </p>
          <p>
            Location:
            {deal.location}
          </p>
          <Link to={`${deal.id}/form`}>Book now</Link>
        </div>
      </div>
    );
  }
}

export default Deal;
