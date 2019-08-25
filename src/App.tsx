import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import httpService from "./services/httpService";
import GithubContext from "./context/github/GithubContext";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "./App.css";

export const http = new httpService();

const App: React.FC = () => {
  const githubContext = useContext(GithubContext);

  const { getUsers, setLoading } = githubContext;

  useEffect(() => {
    let cancel = false;
    setLoading();

    const fetchUsers = async (): Promise<void> => {
      const endpoint = "users?";
      const res = await http.getGH(endpoint);
      if (!cancel) getUsers(res.data);
    };

    fetchUsers();
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  );
};

export default App;
