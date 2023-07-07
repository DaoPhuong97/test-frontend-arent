import { Menu } from "antd";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledMenu = styled(Menu)`
  .ant-menu-item {
    display: flex;
  }
`;

export const GroupIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
