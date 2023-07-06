import React from "react";
import {
  ExcerciseItem,
  ExcerciseList,
  ExcerciseNote,
  MyExcerciseContainer,
} from "./styles";
import "./style.css";
function MyExcercise({ myExcercise }) {
  return (
    <MyExcerciseContainer>
      <div id="titleTable">
        <span id="title" style={{ marginRight: "20px" }}>
          MY EXERCISE
        </span>
        <span id="date">{myExcercise.dateMyExcercise}</span>
      </div>
      {/* list my excercise */}
      <ExcerciseList id="style-2">
        <ExcerciseItem>
          {myExcercise.excercies.map((item) => (
            <li
              style={{
                width: "44%",
                borderBottom: "1px solid #777777",
                marginRight: "25px",
              }}
            >
              <ExcerciseNote
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  paddingRight: "30px",
                  paddingBottom: "8px",
                }}
              >
                <div>
                  <p style={{ margin: "8px 0" }}>{item.title}</p>
                  <span style={{ color: "#FFCC21" }}>{item.kcal}kcal</span>
                </div>
                <div style={{ color: "#FFCC21" }}>{item.time} min</div>
              </ExcerciseNote>
            </li>
          ))}
        </ExcerciseItem>
      </ExcerciseList>
    </MyExcerciseContainer>
  );
}
export default MyExcercise;
