import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    const project = [
      {
        id: "1213",
        projectName: "Induction",
        clientName: "Ventura",
        allocatedHours: "120",
        spentHours: "60",
        remainingHours: "60",
      },
      {
        id: "48646489",
        projectName: "Induction",
        clientName: "Ventura",
        allocatedHours: "120",
        spentHours: "60",
        remainingHours: "60",
      },
    ];

    if (project) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-folder"> Projects </i>
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>

          <table className="table table-striped">
            <thead className="thread-inverse">
              <tr>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Allocated Hours</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {project.map((project) => (
                <tr key={project.id}>
                  <td>{project.projectName}</td>
                  <td>{project.clientName}</td>
                  <td>{parseFloat(project.allocatedHours).toFixed(2)} </td>
                  <td>
                    <Link
                      to={`/project/${project.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Projects;
