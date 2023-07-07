import React from "react";
import styled from "styled-components";
const StyledButton = styled.div`
  background: url("images/scroll_to_top.png");
  width: 48px;
  height: 48px;
  position: sticky;
  float: right;
  bottom: 17rem;
  right: 6rem;
  cursor: pointer;
`;
function ScrollToTopButton() {
  const returnToTop = () => {
    document.querySelector(".navbar-container").scrollIntoView();
  };
  return <StyledButton onClick={() => returnToTop()} />;
}

export default ScrollToTopButton;
