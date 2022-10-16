import * as api from "../api/index";

export const getFriends = () => async (dispatch) => {
    try {
      dispatch(ChangeLoadingStatus(true));
      const { data } = await api.getFriends();
      const action = { type: "GET_FRIENDS", payload: data };
      dispatch(action);
      dispatch(ChangeLoadingStatus(false));
    } catch (error) {
      console.log(error.message);
      dispatch(ChangeLoadingStatus(false));
    }
};

export const ChangeLoadingStatus = (dat) => ({
    type: "CHANGE_LOADING_STATUS",
    payload: dat,
});
