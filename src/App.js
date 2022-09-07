import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectReport from "./pages/ProjectReport";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/dashboard" element={<Home />} exact />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/report/pdfreport" element={<ProjectDetails />} />
          <Route
            path="/report/allprojectbudgetplot"
            element={<ProjectReport />}
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
