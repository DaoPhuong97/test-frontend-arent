import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 296px;
  height: 56px;
  color: #fff;
  background: linear-gradient(33deg, #ffcc21 0%, #ff963c 100%);
  border: none;
  border-radius: 6px;
  font-family: Hiragino Kaku Gothic Pro;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
`;

function FooterButton() {
  return <StyledButton>コラムをもっと見る</StyledButton>;
}
export default FooterButton;
