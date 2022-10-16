const FriendReducer = (state = { frData: null }, action) => {
    switch (action.type) {
      case "FETCH_USER":
        return { ...state, frData: action.payload };
      default:
        return state;
    }
  };
  
  export default FriendReducer;
  