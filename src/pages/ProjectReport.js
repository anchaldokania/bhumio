import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import Chart from "../components/Chart";
import { fetchUsers } from "../store/UserActions";

const ProjectReport = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h1>Loading</h1>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      {userData && userData.projectId && (
        <Chart projectId={userData.projectId} budget={userData.budget} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const projectId = [];
  const budget = [];
  state.users.map((item) => {
    projectId.push(item.projectID);
    budget.push(item.budget);
  });
  return {
    userData: {
      loading: state.loading,
      projectId: projectId,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectReport);
