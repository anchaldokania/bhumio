import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import styles from "../Design/Modal.module.css";

const Modal = (props) => {
  let data = useSelector((state) => state.users);
  const [inputs, setInputs] = useState({
    projectID: "",
    projectName: "",
    projectManager: "",
    siteAddress: "",
    railwayStation: "",
    budget: "",
    startDate: "",
    endDate: "",
    supplier1: "",
    contactPerson: "",
    phone: "",
    email: "",
    projectStatus: "",
  });

  const closeModalHandler = () => {
    props.closeModal(false);
  };

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      inputs.projectID === "" ||
      inputs.projectName === "" ||
      inputs.endDate === "" ||
      inputs.email === "" ||
      inputs.budget === ""
    ) {
      alert("Project id/ project name/ endDate/email are the required field ");
    } else {
      data.push(inputs);
      axios({
        method: "put",
        url: "https://api.jsonbin.io/v3/b/6313459a5c146d63ca8ccde5",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2b$10$1tzx/LcgPRg4PqKlIUh93eZJVNmHMB14qo4WLLP1AjqjWnXJUM6yS",
        },
        data: { projects: data },
      }).then(() => {
        setInputs({
          projectID: "",
          projectName: "",
          projectManager: "",
          siteAddress: "",
          railwayStation: "",
          budget: "",
          startDate: "",
          endDate: "",
          supplier1: "",
          contactPerson: "",
          phone: "",
          email: "",
          projectStatus: "",
        });
        closeModalHandler();
      });
    }
  };

  return (
    <Paper style={{ width: "70%" }} elevation={5}>
      <form onSubmit={submitHandler}>
        <h3 style={{ textAlign: "center" }}>Project Details</h3>
        <div className={styles.ModalDiv}>
          <TextField
            required
            name="projectID"
            value={inputs.projectID}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Project Id"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="projectName"
            value={inputs.projectName}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Project Name"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="projectManager"
            value={inputs.projectManager}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Project Manager"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="siteAddress"
            value={inputs.siteAddress}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Site Address"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="railwayStation"
            value={inputs.railwayStation}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Railway Station"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="budget"
            value={inputs.budget}
            onChange={handleChange}
            type="number"
            sx={{ margin: 1 }}
            placeholder="Budget"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="startDate"
            value={inputs.startDate}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Start Date"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="endDate"
            value={inputs.endDate}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="End Date"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="supplier1"
            value={inputs.supplier1}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Supplier 1"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="contactPerson"
            value={inputs.contactPerson}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Contact Person"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="email"
            value={inputs.email}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Email"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Phone Number"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <TextField
            name="projectStatus"
            value={inputs.projectStatus}
            onChange={handleChange}
            type="text"
            sx={{ margin: 1 }}
            placeholder="Project Status"
            variant="outlined"
            style={{ width: "90%" }}
            size="small"
          />
          <div>
            <button onClick={closeModalHandler} className={styles.cancelButton}>
              Cancel
            </button>
            <button
              onClick={submitHandler}
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default Modal;
