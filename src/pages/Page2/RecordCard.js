import React from "react";
import { AbsoluteContainer, StyledImage, StyledRecordCard } from "./styles";

function RecordCard({ imgSrc, title, buttonTitle }) {
  return (
    <StyledRecordCard>
      <StyledImage src={imgSrc} alt=""></StyledImage>
      <AbsoluteContainer>
        <label className="record-title">{title}</label>
        <div className="description-wrapper">
          <p className="note">{buttonTitle}</p>
        </div>
      </AbsoluteContainer>
    </StyledRecordCard>
  );
}
export default RecordCard;
