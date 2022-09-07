import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Sidebar from "../components/Sidebar";
import styles from "../Design/Home.module.css";
import Card from "../components/Card";

const Project = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPDFPageHandler = () => {
    navigate("/report/pdfreport");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className={styles.sideMainDiv}>
        <div className={styles.projectDiv}>
          <Card
            firstProperty="ProjectID"
            secondProperty="Project Name"
            thirdProperty="Project Manager"
            fourthProperty="Start Date"
            firstPropertyDetails={location.state.projectID}
            secondPropertyDetails={location.state.projectName}
            thirdPropertyDetails={location.state.projectManager}
            fourthPropertyDetails={location.state.startDate}
          />
          <Card
            firstProperty="Site Address"
            secondProperty="Railway Station"
            thirdProperty="Budget"
            fourthProperty="EndDate"
            firstPropertyDetails={location.state.siteAddress}
            secondPropertyDetails={location.state.railwayStation}
            thirdPropertyDetails={location.state.budget}
            fourthPropertyDetails={location.state.endDate}
          />

          <Card
            firstProperty="Supplier 1"
            secondProperty="Contact Person"
            thirdProperty="Phone"
            fourthProperty="Email"
            firstPropertyDetails={location.state.supplier1}
            secondPropertyDetails={location.state.contactPerson}
            thirdPropertyDetails={location.state.phone}
            fourthPropertyDetails={location.state.email}
          />
          <Card
            firstProperty="Project Status"
            firstPropertyDetails={location.state.projectStatus}
          />
        </div>
        <Button
          variant="outlined"
          size="large"
          className={styles.buttonProjectDetails}
          onClick={goToPDFPageHandler}
        >
          Project Details
        </Button>
      </div>
    </div>
  );
};

export default Project;
