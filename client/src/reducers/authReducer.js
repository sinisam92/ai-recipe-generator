export const authReducer = (state, action) => {
  console.log("Auth Action:", action.type, "Payload:", action.payload);
  switch (action.type) {
    case "AUTH_START":
      return { ...state, isAuthenticating: true, error: null };
    case "AUTH_SUCCESS":
      console.log("Auth AUTH_SUCCESS:", action.payload);

      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case "AUTH_FAILURE":
      console.error("Auth Failure Details:", {
        error: action.payload,
        previousState: state,
        timestamp: new Date().toISOString(),
      });
      return { ...state, isAuthenticating: false, error: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null, token: null };
    default:
      return state;
  }
};
