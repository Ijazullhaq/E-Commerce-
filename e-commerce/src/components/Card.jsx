// src/components/Card.jsx
import React from 'react';
import { BsFillBagFill } from 'react-icons/bs';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {/* Render the star rating dynamically */}
          {[...Array(star)].map((_, index) => (
            <span key={index} className="star">
              ⭐
            </span>
          ))}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            {/* Display previous price with strikethrough and new price */}
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            {/* Bag icon */}
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
