import * as api from "../api/index";

export const signIn = (email, password, navigate) => (dispatch) => {
  dispatch(ChangeLoadingStatus(true));

  setTimeout(() => {
    api
      .signIn(email, password)
      .then((response) => {
        //   console.log(response.status);
        if (response.status === 200) {
          //   console.log("inn");
          localStorage.setItem("email_password", response.data.emailid + response.data.password);

          dispatch(ChangeLoadingStatus(false));
          dispatch({ type: "LOGIN", payload: response.data });
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        alert(error.response.data.msg);

        dispatch(ChangeLoadingStatus(false));
      });
  }, 2000);
};

export const signUp = (email, password, name) => (dispatch) => {
  dispatch(ChangeLoadingStatus(true));

  setTimeout(() => {
    api
      .signUp(email, password, name)
      .then((response) => {
        //   console.log(response.status);
        if (response.status === 200) {
          //   console.log("inn");
          localStorage.setItem("email_password", response.data.emailid + response.data.password);

          dispatch(ChangeLoadingStatus(false));
          dispatch({ type: "LOGIN", payload: response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        alert(error.response.data.msg);

        dispatch(ChangeLoadingStatus(false));
      });
  }, 2000);
};

export const LogOut = (navigate) => (dispatch) => {
  dispatch({ type: 'LOGOUT'});
  navigate("/signin");

}

export const ChangeLoadingStatus = (dat) => ({
  type: "CHANGE_LOADING_STATUS",
  payload: dat,
});
