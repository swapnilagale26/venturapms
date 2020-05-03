import React from "react";
import Projects from "../projects/Projects";
import Sidebar from "../layouts/Sidebar";
function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-10">
          <Projects></Projects>
        </div>

        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
