import React from "react";
import "./style.css";
function HexaCard({ src, title }) {
  return (
    <div className="hexa-container">
      <img src="images/hesaImage.svg" alt="" />
      <div className="group-icon-title">
        <img className="style-image" src={src} alt="" />
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default HexaCard;
