import React from "react";

import styles from "../Design/ProjectDetails.module.css";

const ProjectDetailsTable = (props) => {
  return (
    <table
      style={{ textAlign: "center", borderCollapse: "collapse", width: "60%" }}
    >
      <thead>
        <tr
          className={styles.trDesign}
          style={{
            borderBottom: "5px solid #ADD8E6",
            padding: "30px",
          }}
        >
          <th style={{ padding: "12px 80px 5px 80px", width: "600px" }}>
            Project Id
          </th>
          <th style={{ padding: "12px 80px 5px 80px", width: "600px" }}>
            Project Name
          </th>
          <th style={{ padding: "12px 80px 5px 80px", width: "600px" }}>
            Budget
          </th>
        </tr>
      </thead>
      <tbody>
        {props.projectId.map((item, index) => (
          <tr key={`row${index}`}>
            <td style={{ padding: "12px 80px 5px 80px" }}>{item}</td>
            <td style={{ padding: "12px 80px 5px 80px" }}>
              {props.projectName[index]}
            </td>
            <td style={{ padding: "12px 80px 5px 80px" }}>
              {props.budget[index]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectDetailsTable;
