import React from "react";
import { Col, Row, Table } from "antd";
import { PageHeader } from "../../components/page-headers/page-headers";
import CardSummary from "./_partials/CardSummary";
import { Cards } from "../../components/cards/frame/cards-frame";
import { createDataSource, createTableColumns } from "./functions";

const Dashboard = () => {
  const newOrders = [
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
    {
      order_id: "OD-06-13-8LPB35",
      market: "Mile 12",
      price: "N25000",
      status: "NEW",
    },
  ];

  const tableHeader = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>New Orders</span>
    </div>
  );

  return (
    <section className="dashboard">
      <PageHeader title="Dashboard" />

      <CardSummary />

      <Row gutter={15}>
        <Col xs={24}>
          <Cards title={tableHeader}>
            <Table
              className="table-responsive"
              pagination={false}
              dataSource={createDataSource(newOrders)}
              columns={createTableColumns()}
              loading={false}
            />
          </Cards>
        </Col>
      </Row>

      <Row gutter={15}>
        <Col xs={24}>
          <Cards title={tableHeader}>
            <Table
              className="table-responsive"
              pagination={false}
              dataSource={createDataSource(newOrders)}
              columns={createTableColumns()}
              loading={false}
            />
          </Cards>
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
