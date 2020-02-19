import React from 'react';
import { Link } from 'react-router-dom';

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
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { deals, isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div>
        <h1>Deal List</h1>
        <div>
          {deals.map(deal => (
            <div key={deal.id}>
              <Link to={`/deals/${deal.id}`}>
                {deal.deal_name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DealList;
