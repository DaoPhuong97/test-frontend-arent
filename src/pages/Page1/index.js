import React from "react";
import { Container } from "./styles";
import { Card, Row, Col } from "antd";
import FoodCard from "./FoodCard";
import HexaCard from "./HexaCard";

const foodCards = [
  { title: "05.21.Morning", url: "images/m01.jpg" },
  { title: "05.21.Lunch", url: "images/m01.jpg" },
  { title: "05.21.Dinner", url: "images/m01.jpg" },
  { title: "05.21.Snack", url: "images/m01.jpg" },
  { title: "05.20.Morning", url: "images/m01.jpg" },
  { title: "05.20.Lunch", url: "images/m01.jpg" },
  { title: "05.20.Dinner", url: "images/m01.jpg" },
  { title: "05.21.Snack", url: "images/m01.jpg" },
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
        <div style={{ width: "40%" }}>
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
            Card,
          }}
        >
          <img
            style={{
              width: "36.8125rem",
              height: "100%",
              objectFit: "contain",
            }}
            src={require("../../assets/images/body-fat.png")}
            alt=""
          />
        </div>
      </Container>
      <div style={{width: "70%", margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "space-evenly", padding: "22px 0"}}>
          {hesaCards.map((hexa) => (
            <HexaCard src={hexa.url} title={hexa.title} />
          ))}
        </div>
      
        <Row align="middle">
          {foodCards.map((food) => (
            <Col span={6}>
              <FoodCard src={food.url} title={food.title} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
export default Page1;
