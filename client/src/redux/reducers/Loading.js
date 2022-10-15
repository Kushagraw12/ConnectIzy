const LoadingReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case "CHANGE_LOADING_STATUS":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default LoadingReducer;
