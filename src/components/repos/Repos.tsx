import React from "react";
import { IRepo } from "../../types/interfaces";
import RepoItem from "./RepoItem";

interface IProps {
  repos: IRepo[];
}

const Repos: React.FC<IProps> = ({ repos }) => {
  return (
    <>
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </>
  );
};

export default Repos;
