export const appInitialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  alert: null
};

export const appActionTypes = {
  setLoading: "SET_LOADING",
  setUsers: "SET_USERS",
  setUser: "SET_USER",
  setRepos: "SET_REPOS",
  setAlert: "SET_ALERT"
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case appActionTypes.setLoading:
      return { ...state, loading: true };
    case appActionTypes.setUsers:
      return { ...state, users: action.payload, loading: false, alert: null };
    case appActionTypes.setUser:
      return { ...state, user: action.payload, loading: false };
    case appActionTypes.setRepos:
      return { ...state, repos: action.payload, loading: false };
    case appActionTypes.setAlert:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};
