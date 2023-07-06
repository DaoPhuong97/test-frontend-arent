import styled from "styled-components";

// Record card
export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 107px;
  left: 64px;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  object-fit: cover;
  opacity: 0.5;
  filter: brightness(0.5);
`;
export const RecordCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const RecordCardWrapper = styled.div`
  margin: 56px 24px;
`;
export const StyledRecordCard = styled.div`
  width: 288px;
  height: 288px;
  border: 19px solid #ffcc21;
  display: block;
  position: relative;
`;

// ---------------------------------------------
//DiaryCard

export const DiaryCardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const TitleDiary = styled.div`
  margin-top: 45px;
  width: 70%;
  color: #414141;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.11px;
`;
export const DiaryCardBody = styled.div`
  width: 231px;
  height: 231px;
  border: 2px solid #707070;
  background: var(--27-custom-style, #fff);
  padding: 16px;
`;

export const DiaryCardWrapper = styled.div`
  margin: 6px 6px;
`;

export const DiaryCardDate = styled.div``;
export const DiaryCardTime = styled.div``;
export const DiaryCardDescription = styled.div``;

export const MyExcerciseCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const MyExcerciseContainer = styled.div`
  width: 960px;
  height: 264px;
  background: #414141;
  padding: 24px;
  color: white;
`;
export const ExcerciseList = styled.div`
  max-height: 200px;
  scroll-behavior: smooth;
  overflow: scroll;
  padding-left: 15px;
  overflow-x: hidden;
`;
export const ExcerciseItem = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
`;

export const ExcerciseNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 30px;
  padding-bottom: 8px;
`;

// CHART
export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0px 56px 0;
`;
