import React from 'react';
//import { connect } from 'react-redux';
//import { getUser } from '../actions/index';

/*const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser(user)),
});
*/
class DealForm extends React.Component {
  constructor(props) {
    super(props);
  //  this.handleDealSubmit = this.handleDealSubmit.bind(this);
  }

  /*handleDealSubmit(e) {
    e.preventDefault();
  }*/

  render() {
    return (
      <div>
        <h1>Submit form</h1>
        <form onSubmit={this.handleDealSubmit} />
      </div>
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(DealForm);
export default DealForm;
