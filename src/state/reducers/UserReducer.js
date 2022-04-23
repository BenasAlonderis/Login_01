const UserReducer = (
  state = { user: null, isUnauthorized: false, isLoading: true },
  action
) => {
  switch (action.type) {
    case "loading":
      state.isLoading = true;
      return { ...state };
    case "loggedIn":
      state.user = action.payload;
      state.isUnauthorized = false;
      state.isLoading = false;
      return { ...state };
    case "unauthorized":
      state.user = null;
      state.isUnauthorized = true;
      state.isLoading = false;
      return { ...state };
    case "noLocalStorage":
      state.user = null;
      state.isUnauthorized = null;
      state.isLoading = false;
      return { ...state };
    case "invalidAccessToken":
      state.user = null;
      state.isUnauthorized = null;
      state.isLoading = false;
      return { ...state };
    case "logout":
      state.user = null;
      state.isUnauthorized = null;
      state.isLoading = false;
      return { ...state };
    default:
      return state;
  }
};
export default UserReducer;
