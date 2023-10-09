import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setJobsData } from "../../actions/index";

import "./styles.scss";

const JobListingPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Call handleSearch when the component mounts
    handleSearch();
  }, []); // Empty dependency array ensures this effect runs once

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://apis.camillerakoto.fr/fakejobs/jobs"
      );
      setJobs(response.data);
      dispatch(setJobsData(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-listing-page">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="job-listings">
          {jobs.map((job) => (
            <div key={job.id} className="job-listing">
              <h2>{job.title}</h2>
              <img src={`${job.logo}`} alt={`${job.name}`} />
              <p>{job.name}</p>
              <p>{job.date}</p>
              <p>{job.country}</p>
              <Link to={`/job/${job.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListingPage;
