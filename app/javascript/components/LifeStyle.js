import React from 'react';
import { Link } from 'react-router-dom';

const img = [

  {
    src: 'https://i.ibb.co/WWwKgNr/14-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/1fgRNqS/quote9-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/dQjY3cZ/13-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/t3yS4Z8/quote8-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/74h0phn/12-2x.png',
    class: 'styleImg',
  },

  {
    src: 'https://i.ibb.co/MPPs6DW/quote7-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/Qjp07rv/11-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/jhf96TJ/quote5-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/KD6jKL7/9-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/ss5nzVq/quote6-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/WBpGPHN/6-2x.png',
    class: 'styleImg',
  },

  {
    src: 'https://i.ibb.co/dQ3GnhF/quote4-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/9ynj7Py/8-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/CbksCYx/quote3-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/bKdNS5r/2-2x.png',
    class: 'styleImg',
  },
  {
    src: 'https://i.ibb.co/HTWs6K8/quote2-2x.png',
    class: 'quoteImg',
  },
  {
    src: 'https://i.ibb.co/SmDBzQC/7-2x.png',
    class: 'styleImg',
  },

  {
    src: 'https://i.ibb.co/kSVDMrK/quote1-2x.png',
    class: 'quoteImg',
  },
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
          {(img).map(item => (
            <div className="card lifepage" key={item.class}>
              <img className={item.class} src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LifeStyle;
