const AuthReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, authData: action.payload };
      case "LOGOUT":
        localStorage.clear();
        return { ...state, authData: null };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  