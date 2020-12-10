import React from "react";
import { Menu } from "antd";

const TopNav = () => {
  return (
    <nav className="topNav">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Categories</Menu.Item>
        <Menu.Item key="3">Market</Menu.Item>
        <Menu.Item key="4">Items</Menu.Item>
        <Menu.Item key="5">Addons</Menu.Item>
        <Menu.Item key="6">Orders</Menu.Item>
        <Menu.Item key="7">Customers</Menu.Item>
      </Menu>
    </nav>
  );
};

export default TopNav;
