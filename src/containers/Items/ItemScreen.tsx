import React, { useState } from "react";
import { Button, Row, Col, Table } from "antd";
import { Cards } from "../../components/cards/frame/cards-frame";
import { PageHeader } from "../../components/page-headers/page-headers";
import { createDataSource, createTableColumns } from "./functions";
import { useItemContext } from "../../context/Items";
import AddItemModal from "./_partials/AddItemModal";
import { ItemProps } from "../../context/Items/types";
import EditItemModal from "./_partials/EditItemModal";
import DeleteItemModal from "./_partials/DeleteItemModal";

const ItemScreen = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);

  const [currRow, setCurrRow] = useState<ItemProps>();

  const { isLoading, data } = useItemContext();

  const toggleAddItemModal = () => {
    setIsAddItemModalOpen((isOpen) => !isOpen);
  };

  const toggleEditItemModal = (currRow?: ItemProps) => {
    setCurrRow(currRow);
    setIsEditItemModalOpen((isOpen) => !isOpen);
  };

  const toggleDeleteItemModal = (currRow?: ItemProps) => {
    setCurrRow(currRow);
    setIsDeleteItemModalOpen((isOpen) => !isOpen);
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
            <Button onClick={() => toggleAddItemModal()} type="primary">
              Add New Item
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
              columns={createTableColumns(
                toggleEditItemModal,
                toggleDeleteItemModal
              )}
              loading={isLoading}
            />
          </Cards>
        </Col>
      </Row>

      {/* {isAddItemModalOpen && (
        <AddItemModal
          isAddItemModalOpen={isAddItemModalOpen}
          toggleAddItemModal={toggleAddItemModal}
        />
      )}

      {isEditItemModalOpen && (
        <EditItemModal
          isEditItemModalOpen={isEditItemModalOpen}
          toggleEditItemModal={toggleEditItemModal}
          currItem={currRow}
        />
      )}

      {isDeleteItemModalOpen && (
        <DeleteItemModal
          isDeleteItemModalOpen={isDeleteItemModalOpen}
          toggleDeleteItemModal={toggleDeleteItemModal}
          currCategory={currRow}
        />
      )} */}
    </section>
  );
};

export default ItemScreen;
