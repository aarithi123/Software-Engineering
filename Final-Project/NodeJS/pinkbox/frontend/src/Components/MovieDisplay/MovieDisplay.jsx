import React, { useContext } from "react";
import "./MovieDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

console.log("MovietDisplay.jsx");

const MovieDisplay = ({ movie }) => {
  const { addToCart } = useContext(ShopContext);

  const getImageUrl = (image) => {
    return image.startsWith('http') || image.startsWith('https') 
      ? image 
      : backend_url + image;
  };

  return (
    <div className="moviedisplay">
      <div className="moviedisplay-left">
        <div className="moviedisplay-img-list">
          <img src={getImageUrl(movie.image)} alt="img" />
          <img src={getImageUrl(movie.image)} alt="img" />
          <img src={getImageUrl(movie.image)} alt="img" />
          <img src={getImageUrl(movie.image)} alt="img" />
        </div>
        <div className="moviedisplay-img">
          <img className="movieisplay-main-img" src={getImageUrl(movie.image)} alt="img" />
        </div>
      </div>
      <div className="moviedisplay-right">
        <h1>{movie.title}</h1>
        <div className="moviedisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="moviedisplay-right-prices">
          <div className="moviedisplay-right-price-new">{currency}{movie.cost}</div>
        </div>
        <div className="moviedisplay-right-description">
          {movie.description}
        </div>
        <button onClick={() => addToCart(movie.id)}>ADD TO CART</button>
        <p className="moviedisplay-right-category"><span>Genre :</span> {movie.genre}</p>
        <p className="moviedisplay-year"><span>Year :</span> {movie.year}</p>
      </div>
    </div>
  );
};

export default MovieDisplay;
