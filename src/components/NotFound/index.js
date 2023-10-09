import React from "react";

import "./styles.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>404 Page NotFound</h1>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default NotFound;
