import { Card } from "antd";
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
      <div style={{ background: "#FFCC21",width: "7.5rem", height: "2rem", flexShrink: "0", position: "absolute", bottom: "0" }}>
        <div style={{color: "#FFF",fontSize: "0.9375rem", fontWeight: "400", paddingTop: "0.25rem", textAlign: "center" }}>{title}</div>
      </div>
      <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={src} alt="" />
    </StyledCard>
  );
}

export default FoodCard;
