import React, { useEffect, useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";
import { IRepo } from "../../types/interfaces";
import { GetUserRepos } from "../../types/types";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

interface MatchParams {
  login: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  getUserRepos: GetUserRepos;
  repos: IRepo[];
}

const User: React.FC<IProps> = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, getUserRepos, loading, user, repos } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  const { login: loginParam } = match.params;

  useEffect(() => {
    getUser(loginParam);
    getUserRepos(loginParam);
  }, [loginParam, getUser, getUserRepos]);

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt={login}
            style={{ width: 150 }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <span style={{ fontWeight: "bold" }}>Username: </span>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <span style={{ fontWeight: "bold" }}>Company: </span>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <span style={{ fontWeight: "bold" }}>Website: </span>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
