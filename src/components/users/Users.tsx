import React, { useContext } from "react";
import { IUser } from "../../types/interfaces";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

const Users: React.FC = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user: IUser) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
