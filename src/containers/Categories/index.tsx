import React, { useEffect } from "react";
import { Button, Row, Col, Table } from "antd";
import { Cards } from "../../components/cards/frame/cards-frame";
import { PageHeader } from "../../components/page-headers/page-headers";
import { createDataSource, createTableColumns } from "./functions";

// https://res.cloudinary.com/dfze8bk7j/image/upload/v1598659112/oyoyo/categories/jwrqdkt7pjksihswfbko.jpg

const Categories = () => {
  useEffect(() => {
    document.body.title = "Categories | OyoyoNG";
  }, []);

  const categories = [
    {
      img_url:
        "https://res.cloudinary.com/dfze8bk7j/image/upload/v1598659112/oyoyo/categories/jwrqdkt7pjksihswfbko.jpg",
      name: "Fats and Oil",
      no_of_items15: "",
      created_at: new Date().toLocaleDateString(),
    },
    {
      img_url:
        "https://res.cloudinary.com/dfze8bk7j/image/upload/v1598659112/oyoyo/categories/jwrqdkt7pjksihswfbko.jpg",
      name: "Fats and Oil",
      no_of_items: "15",
      created_at: new Date().toLocaleDateString(),
    },
    {
      img_url:
        "https://res.cloudinary.com/dfze8bk7j/image/upload/v1598659112/oyoyo/categories/jwrqdkt7pjksihswfbko.jpg",
      name: "Fats and Oil",
      no_of_items: "15",
      created_at: new Date().toLocaleDateString(),
    },
    {
      img_url:
        "https://res.cloudinary.com/dfze8bk7j/image/upload/v1598659112/oyoyo/categories/jwrqdkt7pjksihswfbko.jpg",
      name: "Fats and Oil",
      no_of_items: "15",
      created_at: new Date().toLocaleDateString(),
    },
  ];

  return (
    <section className="categories">
      <PageHeader
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Total</span>
            <span>5</span>
          </div>
        }
        buttons={[
          <div key="1" className="page-header-actions">
            <Button type="primary">Add New Category</Button>
          </div>,
        ]}
      />

      <Row gutter={15}>
        <Col xs={24}>
          <Cards headless>
            <Table
              className="table-responsive"
              pagination={false}
              dataSource={createDataSource(categories)}
              columns={createTableColumns()}
              loading={false}
            />
          </Cards>
        </Col>
      </Row>
    </section>
  );
};

export default Categories;
