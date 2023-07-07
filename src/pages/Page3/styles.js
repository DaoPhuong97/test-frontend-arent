import styled from "styled-components";

export const RecomendCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 56px 0;
`;

export const RecommendCardStyle = styled.div`
  width: 216px;
  height: 144px;
  background-color: #2e2e2e;
  padding: 24px;
  .title {
    color: #ffcc21;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.11px;
    margin-bottom: 10px;
  }
  .description {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    margin-top: 8px;
  }
  .divider {
    text-align: center;
    border-bottom: 1px solid #fff;
    height: 1px;
    width: 56px;
    margin: 0 auto;
  }
`;

export const RecommendCardWrapper = styled.div`
  margin: 0 32px 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

export const MediaCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MediaCardWrapper = styled.div`
  margin: 10px 4px;
`;
export const MediaCardStyle = styled.div`
  width: 234px;
  height: 222px;
  display: flex;
  flex-direction: column;
  .title {
    height: 48px;
  }
  .image {
    flex-shrink: 0;
    height: 144.47px;
    position: relative;
    .timeIndicator {
      background: #ffcc21;
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: #fff;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    img {
      max-height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
  .subTitle {
    height: 24px;
    color: #ff963c;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.06px;
  }
`;
