const initialState = {
  formData: {},
  jobsData: {},
  userLogged: false,
};

const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_APPLICATION":
      return {
        ...state,
        formData: action.payload,
      };

    case "SET_JOBS_DATA":
      return {
        ...state,
        jobsData: action.payload,
      };

    case "USER_LOGIN_STATUS":
      return {
        ...state,
        userLogged: action.payload,
      };

    default:
      return state;
  }
};

export default JobsReducer;
