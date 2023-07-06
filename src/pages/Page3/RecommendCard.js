import React from "react";
import { RecommendCardStyle } from "./styles";

function RecommendCard({ title, description }) {
  return (
    <RecommendCardStyle>
      <div className="title">{title}</div>
      <div className="divider" />
      <div className="description">{description}</div>
    </RecommendCardStyle>
  );
}

export default RecommendCard;
