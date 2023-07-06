import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navbarItems = [
  { key: 1, label: "Page 1", url: "/page-1" },
  { key: 2, label: "Page 2", url: "/page-2" },
  { key: 3, label: "Page 3", url: "/page-3" },
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
    <div>
      <Menu
        style={{ background: "#414141" }}
        mode="horizontal"
        defaultSelectedKeys={[1]}
        items={navbarItems}
        onSelect={onSelectHandler}
      />
    </div>
  );
}

export default Navbar;
