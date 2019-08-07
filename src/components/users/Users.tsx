import React from "react";
import { IUser } from "../../types/interfaces";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

interface IProps {
  users: IUser[];
  loading: boolean;
}

const Users: React.FC<IProps> = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
