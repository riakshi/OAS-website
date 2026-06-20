import React from "react";
import "./JobHighlights.css";

function JobHighlightsPage() {
  const jobs = [
    {
      title: "Architect",
      type: "Full Time",
      company: "OAS Architecture",
      deadline: "31 Mar 2026",
      tags: ["Architect", "Negotiable", "Bhubaneswar"],
    },
    {
      title: "Interior Designer",
      type: "Project Based",
      company: "OAS Architecture",
      deadline: "31 Dec 2026",
      tags: ["Interior Designer", "Negotiable", "Muzaffarpur, Bihar"],
    },
  ];

  return (
    <section id="jobs" className="container-fluid py-5">
  <h2 className="text-center fw-bold mb-5">Job Highlights</h2>
  <div className="row justify-content-center">
    {jobs.map((job, index) => (
      <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={index}>
        <div className="job-card shadow">
          <h5 className="fw-bold">{job.title}</h5>
          <p className="text-muted">{job.type}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Deadline:</strong> {job.deadline}</p>
          <div className="tags">
            {job.tags.map((tag, i) => (
              <span className="badge bg-dark me-2" key={i}>{tag}</span>
            ))}
          </div>
          <button className="btn btn-outline-dark mt-3">Apply Now</button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default JobHighlightsPage;
