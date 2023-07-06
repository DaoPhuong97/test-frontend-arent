import React from "react";
import {
  DiaryCardBody,
  DiaryCardDate,
  DiaryCardDescription,
  DiaryCardTime,
} from "./styles";

function DiaryCard({ date, time, description }) {
  return (
    <DiaryCardBody>
      <DiaryCardDate>{date}</DiaryCardDate>
      <DiaryCardTime>{time}</DiaryCardTime>
      <DiaryCardDescription>{description}</DiaryCardDescription>
    </DiaryCardBody>
  );
}

export default DiaryCard;
