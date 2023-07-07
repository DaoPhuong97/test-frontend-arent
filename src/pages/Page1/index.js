import React from "react";
import { CardRow, Container, FlexContainer } from "./styles";
import FoodCard from "./FoodCard";
import HexaCard from "./HexaCard";
import LineChart from "../Page2/Chart";
import FooterButton from "../../components/FooterButton";
import ScrollToTopButton from "../../components/ScrollToTopButton";

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
        <div className="left-part">
          <img
            className="food-card-img"
            src={require("../../assets/images/d01.jpg")}
            alt=""
          />
        </div>
        <div className="line-chart-right">
          <LineChart />
        </div>
      </Container>
      <div>
        <div className="hexa-card">
          {hesaCards.map((hexa) => (
            <div className="hexa-card-item">
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
      <div className="flex-center space-btn">
        <FooterButton>コラムをもっと見る</FooterButton>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
export default Page1;
