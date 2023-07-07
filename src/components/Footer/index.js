import React from "react";
import { FooterContainer } from "./styles";

const footerItems = [
  {
    key: 1,
    label: "会員登録",
  },
  {
    key: 2,
    label: "運営会社",
  },
  {
    key: 3,
    label: "利用規約",
  },
  {
    key: 4,
    label: "個人情報の取扱について",
  },
  {
    key: 5,
    label: "特定商取引法に基づく表記",
  },
  {
    key: 6,
    label: "お問い合わせ",
  },
];
function FooterComponent() {
  return (
    <FooterContainer>
      {footerItems.map((item) => (
        <div style={{ marginRight: "50px" }}>{item.label}</div>
      ))}
    </FooterContainer>
  );
}
export default FooterComponent;
