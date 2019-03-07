const initState = {
  authError: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return { ...state, authError: "" };
    case "LOGIN_ERROR":
      console.log("Login error");
      return { ...state, authError: "Error while Login" };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
