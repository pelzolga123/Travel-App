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
      <div>
        <img src={deal.image_url} alt="" />
        <h1>{deal.deal_name}</h1>
        <p>{deal.date}</p>
        <p>{deal.description}</p>
        <p>{deal.price}</p>
        <p>{deal.location}</p>
        <Link to={`${deal.id}/form`}>Book now</Link>
      </div>
    );
  }
}

export default Deal;
