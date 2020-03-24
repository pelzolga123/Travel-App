import React from 'react';
import { Link } from 'react-router-dom';

const img = [
  {
    src: 'https://i.ibb.co/WWwKgNr/14-2x.png',
    class: 'styleImg',
    id: 0,
  },
  {
    src: 'https://i.ibb.co/1fgRNqS/quote9-2x.png',
    class: 'quoteImg',
    id: 1,
  },
  {
    src: 'https://i.ibb.co/dQjY3cZ/13-2x.png',
    class: 'styleImg',
    id: 2,
  },
  {
    src: 'https://i.ibb.co/t3yS4Z8/quote8-2x.png',
    class: 'quoteImg',
    id: 3,
  },
  {
    src: 'https://i.ibb.co/74h0phn/12-2x.png',
    class: 'styleImg',
    id: 4,
  },
  {
    src: 'https://i.ibb.co/MPPs6DW/quote7-2x.png',
    class: 'quoteImg',
    id: 5,
  },
  {
    src: 'https://i.ibb.co/Qjp07rv/11-2x.png',
    class: 'styleImg',
    id: 6,
  },
  {
    src: 'https://i.ibb.co/jhf96TJ/quote5-2x.png',
    class: 'quoteImg',
    id: 7,
  },
  {
    src: 'https://i.ibb.co/KD6jKL7/9-2x.png',
    class: 'styleImg',
    id: 8,
  },
  {
    src: 'https://i.ibb.co/ss5nzVq/quote6-2x.png',
    class: 'quoteImg',
    id: 9,
  },
  {
    src: 'https://i.ibb.co/WBpGPHN/6-2x.png',
    class: 'styleImg',
    id: 10,
  },
  {
    src: 'https://i.ibb.co/dQ3GnhF/quote4-2x.png',
    class: 'quoteImg',
    id: 11,
  },
  {
    src: 'https://i.ibb.co/9ynj7Py/8-2x.png',
    class: 'styleImg',
    id: 12,
  },
  {
    src: 'https://i.ibb.co/CbksCYx/quote3-2x.png',
    class: 'quoteImg',
    id: 13,
  },
  {
    src: 'https://i.ibb.co/bKdNS5r/2-2x.png',
    class: 'styleImg',
    id: 14,
  },
  {
    src: 'https://i.ibb.co/HTWs6K8/quote2-2x.png',
    class: 'quoteImg',
    id: 15,
  },
  {
    src: 'https://i.ibb.co/SmDBzQC/7-2x.png',
    class: 'styleImg',
    id: 16,
  },
  {
    src: 'https://i.ibb.co/kSVDMrK/quote1-2x.png',
    class: 'quoteImg',
    id: 17,
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
        <div className="dealsContainer page">
          {(img).map(item => (
            <div className="card lifepage" key={item.id}>
              <img className={item.class} src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LifeStyle;
