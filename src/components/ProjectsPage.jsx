import { useState } from "react";
import "./Projects.css";

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("interior");

  const projects = {
    interior: [
      { img: "/interior/interior1.jpg", title: "Interior 1" },
      { img: "/interior/interior2.jpg", title: "Interior 2" },
      { img: "/interior/interior3.jpg", title: "Interior 3" },
    ],
    planning: [
      { img: "/planning/planning1.jpg", title: "Planning 1" },
      { img: "/planning/planning2.jpg", title: "Planning 2" },
    ],
    construction: [
      { img: "/construction/construction1.jpg", title: "Construction 1" },
      { img: "/construction/construction2.jpg", title: "Construction 2" },
    ],
  };

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center fw-bold mb-4">Projects Dashboard</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "interior" ? "active" : ""}`}
            onClick={() => setActiveTab("interior")}
          >
            Interior
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "planning" ? "active" : ""}`}
            onClick={() => setActiveTab("planning")}
          >
            Planning
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "construction" ? "active" : ""}`}
            onClick={() => setActiveTab("construction")}
          >
            Construction
          </button>
        </li>
      </ul>

      {/* Grid */}
<div className="row justify-content-center">
  {projects[activeTab].map((proj, index) => (
    <div className="col-md-4 mb-4 d-flex justify-content-center" key={index}>
      <div className="project-card">
        <img src={proj.img} alt={proj.title} />
        <div className="overlay">
          <h5 className="fw-bold">{proj.title}</h5>
          <p>Click to explore more details about {proj.title}.</p>
        </div>
        <div className="label">{proj.title}</div>
      </div>
    </div>
  ))}
</div>



    </section>
  );
}

export default ProjectsPage;
