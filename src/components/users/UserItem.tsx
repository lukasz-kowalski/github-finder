import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../types/interfaces";

interface IProps {
  user: IUser;
}

const UserItem: React.FC<IProps> = ({ user: { login, avatar_url } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt=""
      className="round-img"
      style={{
        width: 60
      }}
    />
    <h3>{login}</h3>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  </div>
);

export default UserItem;
