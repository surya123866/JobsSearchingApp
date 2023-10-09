export const submitApplication = (formData) => {
  return {
    type: "SUBMIT_APPLICATION",
    payload: formData,
  };
};

export const setJobsData = (jobsData) => {
  return {
    type: "SET_JOBS_DATA",
    payload: jobsData,
  };
};

export const setUserLoginStatus = (status) => {
  return {
    type: "USER_LOGIN_STATUS",
    payload: status,
  };
};
