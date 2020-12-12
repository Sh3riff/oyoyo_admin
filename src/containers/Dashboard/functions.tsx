import React from "react";
import { Button, Space } from "antd";
import { ButtonStyled } from "./styled";
import { Link } from "react-router-dom";

// Function that Generate Table Columns

const createTableColumns = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Order ID",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "market",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <Space size="middle">
            <Button>
              <Link to={`/#`}>View Details</Link>
            </Button>
          </Space>
        );
      },
    },
  ];

  return columns;
};

const createDataSource = (organizationList: any[]) => {
  const dataSource = organizationList.map((org, key) => {
    return {
      id: key + 1,
      order_id: org.order_id,
      market: org.market,
      price: org.price,
      status: org.status,
    };
  });

  return dataSource;
};

export { createTableColumns, createDataSource };
