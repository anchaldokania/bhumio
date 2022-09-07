import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Button } from "@mui/material";

import { fetchUsers } from "../store/UserActions";
import styles from "../Design/ProjectDetails.module.css";
import ProjectDetailsTable from "../components/ProjectDetailsTable";
import jsPDF from "jspdf";

const ProjectDetails = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const generatePdfHandler = () => {
    var doc = new jsPDF("l", "pt", "a4");
    doc.html(document.querySelector("#projectDetails"), {
      callback: function (pdf) {
        pdf.save("mypdf".pdf);
      },
    });
  };
  return userData.loading ? (
    <p>Loading..</p>
  ) : userData.error ? (
    <p>Something went wrong..</p>
  ) : (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <Sidebar />

      <div className={styles.sideMainDiv}>
        <div id="projectDetails">
          <ProjectDetailsTable
            projectId={userData.projectId}
            projectName={userData.projectName}
            budget={userData.budget}
          />
        </div>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          maxHeight: "100vh",
          paddingBottom: "200px",
          paddingRight: "20px",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          className={styles.buttonEl}
          styles={{ position: "fixed", right: "10px", bottom: "10px" }}
          onClick={generatePdfHandler}
        >
          Generate PDF
        </Button>
        <Button
          variant="outlined"
          size="large"
          className={styles.buttonEl}
          styles={{ position: "fixed", right: "10px", bottom: "10px" }}
        >
          SIGN
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const projectId = [];
  const budget = [];
  const projectName = [];
  state.users.forEach((item) => {
    projectId.push(item.projectID);
    budget.push(item.budget);
    projectName.push(item.projectName);
  });
  return {
    userData: {
      loading: state.loading,
      projectId: projectId,
      projectName: projectName,
      budget: budget,
      error: state.error,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
