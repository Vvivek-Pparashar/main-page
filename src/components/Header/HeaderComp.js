import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./HeaderComp.css";

const { Header } = Layout;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const HeaderComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header id="header_style">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={require("../assests/logo.png")}
          alt="logo"
          className="logo_img"
        />

        <MenuOutlined
          className="bigmenu"
          style={{ fontSize: "5vw", cursor: "pointer", textAlign: "center" }}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>

      <div className="menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ fontSize: "1.3vw" }}
          items={[
            {
              key: 1,
              label: "For Reviewers",
            },

            {
              key: 2,
              label: "For Founders",
            },

            {
              key: 3,
              label: "Contact Us",
            },
          ]}
        />
        <button className="menu_button">Login</button>
      </div>
    </Header>
  );
};
export default HeaderComp;
