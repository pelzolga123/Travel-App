import React from 'react';
import { Link } from 'react-router-dom';

const img = [
  'https://i.ibb.co/7CYNtwf/2.png',
  'https://i.ibb.co/4MnxX5C/stamp-9.png',
];


const LifeStyle = () => (
  <div>
    <div className="outerContainer">
      <div className="menuContainer">
        <Link to="/">Home</Link>
      </div>
      <div className="outerDeals">
        <h1>Lifestyle</h1>
        <div className="dealsContainer">
          {img.map(item => (
            <div className="card" key={item}>
              <img className="smallImg" src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LifeStyle;
