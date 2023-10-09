// SuccessPage.js
import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss"; // Import the SCSS file

const SuccessPage = () => {
  const { formData } = useSelector((state) => state.JobsReducer); // Access formData within JobsReducer

  return (
    <div className="success-page">
      <h2>Application Submitted Successfully</h2>
      <p>
        Thank you for submitting your application. Here is a preview of your
        data:
      </p>
      <div className="preview">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Cover Letter:</strong> {formData.coverLetter}
        </p>
        {formData.resume && (
          <p>
            <strong>Resume:</strong> {formData.resume.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
