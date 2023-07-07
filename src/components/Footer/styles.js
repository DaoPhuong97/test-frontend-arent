import { Dropdown } from "antd";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffffff;
`;

export const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu {
    background-color: #777777;
  }
`;
export const StyledItemFooter = styled.div`
  margin-right: 50px;
  color: #fff;
  font-family: Hiragino Kaku Gothic Pro;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1rem;
  letter-spacing: 0.00206rem;
`;
