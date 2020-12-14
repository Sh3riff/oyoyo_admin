import React, { useState } from "react";
import { Button, Row, Col, Table } from "antd";
import { Cards } from "../../components/cards/frame/cards-frame";
import { PageHeader } from "../../components/page-headers/page-headers";
import { createDataSource, createTableColumns } from "./functions";
import { useCategoryContext } from "../../context/Categories";
import AddCategoryModal from "./_partials/AddCategoryModal";

const CategoryScreen = () => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const { isLoading, data } = useCategoryContext();

  const toggleAddCategoryModal = () => {
    setIsAddCategoryModalOpen((isOpen) => !isOpen);
  };

  return (
    <section className="categories">
      <PageHeader
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>Total</span>
            <span
              style={{
                background: " rgb(85, 110, 230)",
                borderRadius: " 50px",
                color: "rgb(255, 255, 255)",
                padding: "5px",
                marginLeft: "1rem",
              }}
            >
              {data.length}
            </span>
          </div>
        }
        buttons={[
          <div key="1" className="page-header-actions">
            <Button onClick={() => toggleAddCategoryModal()} type="primary">
              Add New Category
            </Button>
          </div>,
        ]}
      />

      <Row gutter={15}>
        <Col xs={24}>
          <Cards headless>
            <Table
              className="table-responsive"
              pagination={false}
              dataSource={createDataSource(data)}
              columns={createTableColumns()}
              loading={isLoading}
            />
          </Cards>
        </Col>
      </Row>

      {isAddCategoryModalOpen && (
        <AddCategoryModal
          isAddCategoryModalOpen={isAddCategoryModalOpen}
          toggleAddCategoryModal={toggleAddCategoryModal}
        />
      )}
    </section>
  );
};

export default CategoryScreen;
