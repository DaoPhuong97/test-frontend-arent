import React from "react";
import { StyledCard } from "./styles";

function FoodCard({ src, title }) {
  return (
    <StyledCard
      bodyStyle={{
        padding: 0,
        margin: 0,
        width: "14.625rem",
        height: "14.625rem",
        position: "relative",
      }}
    >
      <div className="food-card-wrapper">
        <div className="food-card-title">{title}</div>
      </div>
      <img className="food-card-img" src={src} alt="" />
    </StyledCard>
  );
}

export default FoodCard;
