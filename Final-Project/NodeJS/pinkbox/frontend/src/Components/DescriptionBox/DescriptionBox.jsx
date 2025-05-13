import React from "react";
import "./DescriptionBox.css";

console.log("DescriptionBox.jsx");

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, services to interact with customers, and
          conduct transactions without the need for a physical presence.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any other available variations.
          Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
