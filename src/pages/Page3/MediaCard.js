import React from "react";
import { MediaCardStyle } from "./styles";

function MediaCard({ imageUrl, title, subTitle, time }) {
  return (
    <MediaCardStyle>
      <div className="image">
        <img src={imageUrl} alt="" />
        <div className="timeIndicator">{time}</div>
      </div>
      <div className="title">{title}</div>
      <div className="subTitle">{subTitle}</div>
    </MediaCardStyle>
  );
}

export default MediaCard;
