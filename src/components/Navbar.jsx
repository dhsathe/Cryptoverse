import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectFilled,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "home",
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies </Link>,
      icon: <FundOutlined />,
      key: "Cryptocurrencies",
    },
    {
      label: <Link to="/exchanges">Exchanges</Link>,
      icon: <HomeOutlined />,
      key: "Exchanges",
    },
    {
      label: <Link to="/news">News</Link>,
      icon: <HomeOutlined />,
      key: "News",
    },
  ];
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src={icon}
          size="large"
        />
        <Typography.Title
          level={2}
          className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>

      <Menu
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Navbar;
