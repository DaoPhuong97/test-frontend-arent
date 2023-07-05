import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const navbarItems = [
    { key: 1, label: "Page 1", url: "/page-1" },
    { key: 2, label: "Page 2", url: "/page-2" },
    { key: 3, label: "Page 3", url: "/page-3" },
  ];

  const onSelectHandler = (e) => {
    const selectedNavbarItem = navbarItems.find(
      (item) => item.key.toString() === e.key
    );
    navigate(selectedNavbarItem.url);
  };

  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[1]}
        items={navbarItems}
        onSelect={onSelectHandler}
      />
    </div>
  );
}

export default Navbar;
