import React from "react";
import ReactDOM from "react-dom";
import GithubState from "./context/github/GithubState";
import App from "./App";

ReactDOM.render(
  <GithubState>
    <App />
  </GithubState>,
  document.getElementById("root")
);
