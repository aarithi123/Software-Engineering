import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Checkout from "../Checkout/Checkout"; // Import Checkout component

const CartItems = () => {
  const { movies, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false); // State to manage Checkout page visibility
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetch(`${backend_url}/getUser`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((resp) => resp.json())
        .then((data) => { setUser(data) });
    }
  }, [])

  const handleCheckout = () => {
    if (!user) {
      alert("User not logged in");
      return;
    }
    const cartDetails = movies.filter(movie => cartItems[movie.id] > 0)
      .map(movie => ({
        title: movie.title,
        price: movie.cost,
        quantity: cartItems[movie.id],
        total: movie.cost * cartItems[movie.id]
      }));
    
    // Navigate to Checkout page
    navigate('/checkout', { state: { user, cartDetails } });
  };

  if (showCheckout) {
    const cartDetails = movies.filter(movie => cartItems[movie.id] > 0)
      .map(movie => ({
        title: movie.title,
        price: movie.cost,
        quantity: cartItems[movie.id],
        total: movie.cost * cartItems[movie.id]
      }));

    return (
      <Checkout user={user} cartDetails={cartDetails} />
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Movies</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {movies.map((e) => {
        if (cartItems[e.id] > 0) {
          const imageUrl = e.image.startsWith('http') || e.image.startswith('https')
            ? e.image
            : backend_url + e.image;

          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-movie-icon" src={imageUrl} alt="" />
                <p className="cartitems-movie-title">{e.title}</p>
                <p>{currency}{e.cost}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{currency}{e.cost * cartItems[e.id]}</p>
                <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
