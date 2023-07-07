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
