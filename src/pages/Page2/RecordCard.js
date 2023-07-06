import React from "react";
import { AbsoluteContainer, StyledImage, StyledRecordCard } from "./styles";

function RecordCard({ imgSrc, title, buttonTitle }) {
  return (
    <StyledRecordCard>
      <StyledImage src={imgSrc} alt=""></StyledImage>
      <AbsoluteContainer>
        <label>{title}</label>
        <p>{buttonTitle}</p>
      </AbsoluteContainer>
    </StyledRecordCard>
  );
}
export default RecordCard;
