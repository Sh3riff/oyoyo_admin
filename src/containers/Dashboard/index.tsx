import React from "react";
import { PageHeader } from "../../components/page-headers/page-headers";
import CardSummary from "./_partials/CardSummary";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <PageHeader
        title="Dashboard"
        // buttons={[
        //   <div key="1" className="page-header-actions">
        //     <Button size="large" type="primary">
        //       <NavLink to="/business">List Your Business</NavLink>
        //     </Button>
        //   </div>,
        // ]}
      />

      <CardSummary />
    </section>
  );
};

export default Dashboard;
