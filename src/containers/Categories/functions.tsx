import React from "react";
import { Button, Space } from "antd";
import { CategoryProps } from "../../context/Categories/types";
import { ColumnsType } from "antd/lib/table";

interface DataTypes {
  image_url: string;
  name: string;
  num_of_item: number;
  created_at: string;
}

// Function that Generate Table Columns
const createTableColumns = (
  toggleEditModal: (currRow: CategoryProps) => void,
  toggleDeleteModal: (currRow: CategoryProps) => void
): ColumnsType<DataTypes> => {
  const columns: ColumnsType<DataTypes> = [
    {
      title: "Category Image",
      dataIndex: "image_url",
      key: "image_url",
      render: (record: any) => {
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
      dataIndex: "num_of_item",
      key: "num_of_item",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (record) => <span>{new Date(record).toLocaleDateString()}</span>,
    },

    {
      title: "Action",
      key: "action",
      render: (record, text) => {
        return (
          <Space size="middle">
            <Button onClick={() => toggleEditModal(record)}>Edit</Button>
            <Button onClick={() => toggleDeleteModal(record)}>Delete</Button>
          </Space>
        );
      },
      align: "center",
    },
  ];

  return columns;
};

const createDataSource = (categories: CategoryProps[]) => {
  const dataSource = categories.map((category, key) => {
    return {
      ...category,
      image_url: category.image_url,
      name: category.name,
      num_of_item: category.num_of_item,
      created_at: category.created_at,
    };
  });

  return dataSource;
};

export { createTableColumns, createDataSource };
