function logIn(user) {
  return (dispatch, getState, { getFirebase }) => {
    console.log("Login action", user);
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.inputEmail, user.inputPassword)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch(error => dispatch({ type: "LOGIN_ERROR", error }));
  };
}

const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "LOGOUT_ERROR" }, error);
      });
  };
};

export const authActions = {
  logIn,
  logOut
};
