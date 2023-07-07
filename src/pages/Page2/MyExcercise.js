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
            <li className="my-excercise-wrapper">
              <ExcerciseNote>
                <div>
                  <p className="my-excercise-title">{item.title}</p>
                  <span className="my-excercise-type ">{item.kcal}kcal</span>
                </div>
                <div className="my-excercise-type excercise-time">
                  {item.time} min
                </div>
              </ExcerciseNote>
            </li>
          ))}
        </ExcerciseItem>
      </ExcerciseList>
    </MyExcerciseContainer>
  );
}
export default MyExcercise;
