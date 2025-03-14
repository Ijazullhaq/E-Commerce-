// src/Recommended/Recommended.jsx
import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  // Array of button titles and values
  const buttonData = [
    { value: "", title: "All Products" },
    { value: "Nike", title: "Nike" },
    { value: "Adidas", title: "Adidas" },
    { value: "Puma", title: "Puma" },
    { value: "Vans", title: "Vans" },
  ];

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        {buttonData.map((button, index) => (
          <Button
            key={index}
            onClickHandler={handleClick}
            value={button.value}
            title={button.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
