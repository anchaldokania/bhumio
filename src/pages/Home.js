import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../store/UserActions";
import Sidebar from "../components/Sidebar";
import Button from "@mui/material/Button";
import { unstable_deprecatedPropType } from "@mui/utils";

import Modal from "../components/Modal";
import Card from "../components/Card";

import styles from "../Design/Home.module.css";

const Home = ({ userData, fetchUsers }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fullProjectDetails = (item) => {
    navigate(`/project/${item.projectID}`, { state: item });
  };

  const newProjectOpenModal = () => {
    setOpenModal(true);
  };

  return userData.loading ? (
    <h2>Loading..</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData && userData.users && (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className={styles.sideMainDiv}>
            {!openModal && (
              <Button
                variant="outlined"
                size="large"
                className={styles.buttonEl}
                onClick={newProjectOpenModal}
              >
                {" "}
                Create new project
              </Button>
            )}
            {!openModal && (
              <div className={styles.projectDiv}>
                {userData.users.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        fullProjectDetails(item);
                      }}
                    >
                      <Card
                        firstProperty="ProjectID"
                        secondProperty="ProjectName"
                        thirdProperty="Budget"
                        fourthProperty="EndDate"
                        firstPropertyDetails={item.projectID}
                        secondPropertyDetails={item.projectName}
                        thirdPropertyDetails={item.budget}
                        fourthPropertyDetails={item.endDate}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
