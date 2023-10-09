import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./styles.scss"; // Import the SCSS file

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const { jobsData } = useSelector((state) => state.JobsReducer);

  // Find the job with the matching jobId
  const selectedJob = jobsData.find((job) => job.id === jobId);

  if (!selectedJob) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="jobDetails-container">
      <div className="job-details">
        <div className="company-logo">
          <img src={`${selectedJob.logo}`} alt={`${selectedJob.Name}`} />
        </div>
        <div className="job-info">
          <h2>Job Details</h2>
          <p>
            Name: <span>{selectedJob.name}</span>
          </p>
          <p>
            Author: <span>{selectedJob.author}</span>
          </p>
          <p>
            Date: <span>{selectedJob.date}</span>
          </p>
          <p>
            Salary: <span>{selectedJob.salary}</span>
          </p>
          <p>
            Fulltime: <span>{selectedJob.fulltime}</span>
          </p>
          <p>
            City: <span>{selectedJob.city}</span>
          </p>
          <p>
            Zipcode: <span>{selectedJob.zipcode}</span>
          </p>
          <p>
            Country: <span>{selectedJob.country}</span>
          </p>
          <p>
            Title: <span>{selectedJob.title}</span>
          </p>
          <p>
            Content: <span>{selectedJob.content}</span>
          </p>
          <Link to={`/job/${jobId}/apply`}>Apply</Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
