import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GroupIconWrapper,
  ImageWrapper,
  NavbarContainer,
  StyledMenu,
} from "./styles";
import "./style.css";
import { StyledDropdown } from "../Footer/styles";

const navbarItems = [
  {
    key: 1,
    icon: <img src="images/icon_memo.svg" alt="" />,
    label: "自分の記録",
    url: "/page-1",
  },
  {
    key: 2,
    icon: <img src="images/icon_recommend.svg" alt="" />,
    label: "チャレンジ",
    url: "/page-2",
  },
  {
    key: 3,
    icon: <img src="images/icon_info.svg" alt="" />,
    label: "お知らせ",
    url: "/page-3",
  },
];

const dropdownItems = [
  {
    key: "1",
    label: <div>自分の記録</div>,
  },
  {
    key: "2",
    label: <div>体重グラフ</div>,
  },
  {
    key: "3",
    label: <div>目標</div>,
  },
  {
    key: "4",
    label: <div>選択中のコース</div>,
  },
  {
    key: "5",
    label: <div>コラム一覧</div>,
  },
  {
    key: "6",
    label: <div>設定</div>,
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [selectedNavbarItem, setSelectedNavbarItem] = useState(navbarItems[2]);

  const onSelectHandler = (e) => {
    const selectedNavbarItem = navbarItems.find(
      (item) => item.key.toString() === e.key
    );
    setSelectedNavbarItem(selectedNavbarItem);
  };

  useEffect(() => {
    navigate(selectedNavbarItem.url);
    document.title = selectedNavbarItem.label;
  }, [selectedNavbarItem]);

  return (
    <NavbarContainer className="navbar-container">
      <ImageWrapper
        onClick={() => {
          setSelectedNavbarItem(navbarItems[0]);
        }}
      >
        <img src="images/logo_app.svg" alt="" />
      </ImageWrapper>
      <GroupIconWrapper>
        <StyledMenu
          style={{
            background: "#414141",
            width: "60%",
            color: "#ffffff",
            justifyContent: "flex-end",
          }}
          mode="horizontal"
          defaultSelectedKeys={[1]}
          items={navbarItems}
          onSelect={onSelectHandler}
        />
        <StyledDropdown
          menu={{ items: dropdownItems }}
          placement="bottomLeft"
          overlayStyle={{
            backgroundColor: "#777",
          }}
        >
          <img
            style={{ marginLeft: "30px" }}
            src="images/icon_menu.svg"
            alt=""
          />
        </StyledDropdown>
      </GroupIconWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
