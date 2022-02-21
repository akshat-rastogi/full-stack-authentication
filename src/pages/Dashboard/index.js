import React from "react";
import CompanyInfo from "../../components/organism/CompanyInfo";
import ApiData from "../../components/organism/ApiData";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <h1>Welcome to the Application</h1>
      <CompanyInfo />
      <hr />
      <ApiData />
    </div>
  );
};

export default Dashboard;
