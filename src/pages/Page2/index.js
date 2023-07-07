import React from "react";
import RecordCard from "./RecordCard";
import {
  ChartContainer,
  DiaryCardWrapper,
  DiaryCardsContainer,
  MyExcerciseCard,
  RecordCardContainer,
  RecordCardWrapper,
  TitleDiary,
} from "./styles";
import DiaryCard from "./DiaryCard";
import MyExcercise from "./MyExcercise";
import LineChart from "./Chart";
import {
  diaries1Mock,
  diaries2Mock,
  myExcerciseMock,
  recordsMock,
} from "./ mockData";
import FooterButton from "../../components/FooterButton";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Page2() {
  return (
    <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
      <RecordCardContainer>
        {recordsMock.map((record) => (
          <RecordCardWrapper>
            <RecordCard
              imgSrc={record.src}
              title={record.title}
              buttonTitle={record.buttonTitle}
            />
          </RecordCardWrapper>
        ))}
      </RecordCardContainer>
      {/* CHART */}
      <ChartContainer className="chart-container">
        <LineChart data={[]} />
      </ChartContainer>

      {/* MY EXCERCISE */}
      <MyExcerciseCard>
        <MyExcercise myExcercise={myExcerciseMock}></MyExcercise>
      </MyExcerciseCard>
      {/* DIARY */}
      <DiaryCardsContainer>
        <TitleDiary>My DIARY</TitleDiary>
      </DiaryCardsContainer>
      <DiaryCardsContainer>
        {diaries1Mock.map((diary) => (
          <DiaryCardWrapper>
            <DiaryCard
              date={diary.date}
              time={diary.time}
              description={diary.description}
            />
          </DiaryCardWrapper>
        ))}
      </DiaryCardsContainer>
      <DiaryCardsContainer>
        {diaries2Mock.map((diary) => (
          <DiaryCardWrapper>
            <DiaryCard
              date={diary.date}
              time={diary.time}
              description={diary.description}
            />
          </DiaryCardWrapper>
        ))}
      </DiaryCardsContainer>
      <div className="flex-center space-btn">
        <FooterButton>コラムをもっと見る</FooterButton>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Page2;
