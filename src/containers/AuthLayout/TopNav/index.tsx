import React from "react";
import { Menu } from "antd";
import { TopNavStyled } from "./styled";
import { NavLink, useRouteMatch } from "react-router-dom";

const { SubMenu } = Menu;

const TopNav = () => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split("/");

  return (
    <TopNavStyled className="topNav">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[
          `${
            mainPathSplit.length === 1
              ? "home"
              : mainPathSplit.length === 2
              ? mainPathSplit[1]
              : mainPathSplit[2]
          }`,
        ]}
      >
        <Menu.Item key="1">
          <NavLink to="/d">Dashboard</NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/d/categories">Categories</NavLink>
        </Menu.Item>

        <SubMenu key="sub2" title="Markets">
          <Menu.Item key="7">
            <NavLink to="/d/geolocations">Geolocations</NavLink>
          </Menu.Item>

          <Menu.Item key="8">
            <NavLink to="/d/markets">Markets</NavLink>
          </Menu.Item>

          <Menu.Item key="9">
            <NavLink to="/d/budgets">Budgets</NavLink>
          </Menu.Item>

          <Menu.Item key="10">
            <NavLink to="/d/locations">Locations</NavLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="4">
          <NavLink to="/d/items">Items</NavLink>
        </Menu.Item>

        <SubMenu key="5" title="Addons">
          <Menu.Item key="addon">
            <NavLink to="/d/addons">Addons</NavLink>
          </Menu.Item>

          <Menu.Item key="addoncategory">
            <NavLink to="/d/addoncategory">Addon Category</NavLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="6">
          <NavLink to="/d/orders">Orders</NavLink>
        </Menu.Item>

        <Menu.Item key="7">
          <NavLink to="/d/customers">Customers</NavLink>
        </Menu.Item>
      </Menu>
    </TopNavStyled>
  );
};

export default TopNav;
