import React from "react";
import { Button, Space } from "antd";

// Function that Generate Table Columns

const createTableColumns = () => {
  const columns = [
    {
      title: "Category Image",
      dataIndex: "img_url",
      key: "img_url",
      render: (record: any) => {
        // console.log({ record, text });

        return (
          <Space size="middle">
            <img
              src={record}
              alt="Profile"
              style={{
                width: "100px",
                height: "80px",
              }}
            />
          </Space>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "No of Items",
      dataIndex: "no_of_items",
      key: "no_of_items",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <Space size="middle">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Space>
        );
      },
    },
  ];

  return columns;
};

const createDataSource = (categories: any[]) => {
  const dataSource = categories.map((category, key) => {
    return {
      img_url: category.img_url,
      name: category.name,
      no_of_items: category.no_of_items,
      created_at: category.created_at,
    };
  });

  return dataSource;
};

export { createTableColumns, createDataSource };
