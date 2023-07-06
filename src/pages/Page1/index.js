import React from "react";
import { CardRow, Container, FlexContainer } from "./styles";
import FoodCard from "./FoodCard";
import HexaCard from "./HexaCard";
import LineChart from "../Page2/Chart";

const foodCards1 = [
  { title: "05.21.Morning", url: "images/m01.jpg" },
  { title: "05.21.Lunch", url: "images/l03.jpg" },
  { title: "05.21.Dinner", url: "images/d01.jpg" },
  { title: "05.21.Snack", url: "images/l01.jpg" },
];
const foodCards2 = [
  { title: "05.20.Morning", url: "images/m01.jpg" },
  { title: "05.20.Lunch", url: "images/l02.jpg" },
  { title: "05.20.Dinner", url: "images/d02.jpg" },
  { title: "05.21.Snack", url: "images/s01.jpg" },
];
const hesaCards = [
  { title: "Morning", url: "images/knife-icon.svg" },
  { title: "Lunch", url: "images/knife-icon.svg" },
  { title: "Dinner", url: "images/knife-icon.svg" },
  { title: "Snack", url: "images/cup-icon.svg" },
];
function Page1() {
  return (
    <div>
      <Container>
        <div style={{ flex: 7 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={require("../../assets/images/d01.jpg")}
            alt=""
          />
        </div>
        <div
          style={{
            background: "#2E2E2E",
            width: "60%",
            display: "inline-block",
            textAlign: "center",
            flex: 10,
          }}
        >
          <LineChart />
          {/* <img
            style={{
              width: "100%",
              maxHeight: "19.75rem",
              objectFit: "contain",
            }}
            src={require("../../assets/images/body-fat.png")}
            alt=""
          /> */}
        </div>
      </Container>
      <div style={{ width: "calc(100% - 320px)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            padding: "22px 0",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          {hesaCards.map((hexa) => (
            <div style={{ margin: "0 32px" }}>
              <HexaCard src={hexa.url} title={hexa.title} />
            </div>
          ))}
        </div>
        <FlexContainer>
          {foodCards1.map((food) => (
            <CardRow>
              <FoodCard src={food.url} title={food.title} />
            </CardRow>
          ))}
        </FlexContainer>

        <FlexContainer>
          {foodCards2.map((food) => (
            <CardRow>
              <FoodCard src={food.url} title={food.title} />
            </CardRow>
          ))}
        </FlexContainer>
      </div>
    </div>
  );
}
export default Page1;
