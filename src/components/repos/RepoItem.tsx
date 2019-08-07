import React from "react";
import { IRepo } from "../../types/interfaces";

interface IProps {
  repo: IRepo;
}

const RepoItem: React.FC<IProps> = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItem;
