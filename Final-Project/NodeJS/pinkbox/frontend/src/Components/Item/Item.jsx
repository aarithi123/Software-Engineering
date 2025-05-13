import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

console.log("Item.jsx");

const Item = (props) => {
  const imageUrl = props.image.startsWith('http') || props.image.startsWith('https') 
    ? props.image 
    : backend_url + props.image;

  return (
    <div className='item'>
      <Link to={`/movie/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={imageUrl} alt="movies" />
      </Link>
      <p>{props.title}</p>
      <div className="item-prices">
        <div className="item-price-new">{currency}{props.cost}</div>
      </div>
    </div>
  );
};

export default Item;
