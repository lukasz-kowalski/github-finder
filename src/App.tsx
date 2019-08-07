import React, { useReducer, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {
  appInitialState,
  appReducer,
  appActionTypes
} from "./reducers/app-reducer";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import "./App.css";

const App: React.FC = () => {
  const { setLoading, setAlert, setRepos, setUsers, setUser } = appActionTypes;
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  useEffect(() => {
    let cancel = false;
    dispatch({ type: setLoading });

    const fetchUsers = async () => {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      if (!cancel) dispatch({ type: setUsers, payload: res.data });
    };

    fetchUsers();
    return () => {
      cancel = true;
    };
  }, [setLoading, setUsers]);

  const searchUsers = async (text: string) => {
    dispatch({ type: setLoading });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: setUsers, payload: res.data.items });
  };

  const getUser = useCallback(
    async userName => {
      dispatch({ type: setLoading });

      const res = await axios.get(
        `https://api.github.com/users/${userName}?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: setUser, payload: res.data });
    },
    [setLoading, setUser]
  );

  const getUserRepos = useCallback(
    async userName => {
      dispatch({ type: setLoading });

      const res = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: setRepos, payload: res.data });
    },
    [setLoading, setRepos]
  );

  const clearUsers = () => dispatch({ type: setUsers, payload: [] });

  const showAlert = (message: string, type: string) => {
    dispatch({ type: setAlert, payload: { message, type } });

    setTimeout(() => dispatch({ type: setAlert, payload: null }), 3000);
  };

  const { alert, users, loading, user, repos } = state;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              path="/"
              render={props => (
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </>
              )}
              exact
            />
            <Route path="/about" component={About} />
            <Route
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
