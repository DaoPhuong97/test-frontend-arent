import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 19.75rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
`;

export const CardRow = styled.div`
  margin: 4px;
`;


export const StyledCard = styled(Card)`
  &.ant-card {
    border: none;
  }
`;
