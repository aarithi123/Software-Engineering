import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { backend_url } from "../../App"; // Adjust the import path as needed
import { useLocation } from 'react-router-dom'; // Import useLocation

const Checkout = () => {
  const location = useLocation();
  const { cartDetails } = location.state || {}; // Get cartDetails from location state
  const [user, setUser] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

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
        .then((data) => { setUser(data); });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not logged in");
      return;
    }

    const emailData = {
      to: user.email, // Using logged-in user's email from fetched user data
      subject: "Order Confirmation",
      body: cartDetails // Directly use cartDetails as it is already an array
    };

    try {
      const response = await fetch(`${backend_url}/sendEmail`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(`Success: ${data.message}`);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
      alert('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <div className="checkout">
      <h1>Enter Credit Card Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkout-input">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="checkout-input">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="checkout-input">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
