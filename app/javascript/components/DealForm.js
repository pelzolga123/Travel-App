import React from 'react';
import { Link } from 'react-router-dom';

const DealForm = () => (
  <div className="outerContainer">
    <div className="menuContainer">
      <Link to="/">Home</Link>
    </div>
    <div className="outerDeals forms">
      <h1>Submit form</h1>
      <form className="submitForm" action="">
        <label htmlFor="first_name">
          First Name
          <input id="first_name" type="text" />
        </label>

        <label htmlFor="last_name">
          Last Name
          <input id="last_name" type="text" />
        </label>

        <label htmlFor="phone">
          Phone Number
          <input id="phone" type="tel" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default DealForm;
