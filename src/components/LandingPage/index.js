import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setJobsData } from "../../actions/index";

import "./styles.scss";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://apis.camillerakoto.fr/fakejobs/jobs"
      );
      setJobs(response.data);
      dispatch(setJobsData(response.data));
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="landing-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a programming language"
          value={language}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Call handleSearch on Enter key press
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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

export default LandingPage;
