import React from "react";
import { Button, Space } from "antd";
import { ItemProps } from "../../context/Items/types";
import { ColumnsType } from "antd/lib/table";

// interface DataTypes {
//   image_url: string;
//   name: string;
//   num_of_item: number;
//   created_at: string;
// }

// Function that Generate Table Columns
const createTableColumns = (
  toggleEditModal: (currRow: ItemProps) => void,
  toggleDeleteModal: (currRow: ItemProps) => void
): ColumnsType<ItemProps> => {
  const columns: ColumnsType<ItemProps> = [
    {
      title: "Image",
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
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
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

const createDataSource = (categories: ItemProps[]) => {
  const dataSource = categories.map((item, key) => {
    return {
      ...item,
      image_url: item.image_url,
      name: item.name,
      category_name: item.category_name,
      price: item.price,
      weight: item.weight,
      created_at: item.created_at,
    };
  });

  return dataSource;
};

export { createTableColumns, createDataSource };
