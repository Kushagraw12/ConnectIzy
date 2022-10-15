const AuthReducer = (state = { userData: null }, action) => {
    switch (action.type) {
      case "FETCH_USER":
        return { ...state, userData: action.payload };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  