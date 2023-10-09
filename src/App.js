import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ApplicationFormPage from "./components/ApplicationFormPage";
import JobDetailsPage from "./components/jobDetailsPage";
import JobListingPage from "./components/jobListingPage";
import LandingPage from "./components/LandingPage";
import SuccessPage from "./components/SuccessPage";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <ProtectedRoute Component={LandingPage} />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/job/:jobId"
            element={
              <React.Fragment>
                <Header />
                <ProtectedRoute Component={JobDetailsPage} />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/job/:jobId/apply"
            element={
              <React.Fragment>
                <Header />
                <ProtectedRoute Component={ApplicationFormPage} />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/job-listing"
            element={
              <React.Fragment>
                <Header />
                <ProtectedRoute Component={JobListingPage} />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/success"
            element={
              <React.Fragment>
                <Header />
                <ProtectedRoute Component={SuccessPage} />
                <Footer />
              </React.Fragment>
            }
          />

          <Route
            path="*"
            element={
              <React.Fragment>
                <Header />
                <NotFound /> <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
