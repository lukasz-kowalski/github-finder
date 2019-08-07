import React, { useState, ChangeEvent, FormEvent } from "react";
import { ClearUsers, ShowAlert, SearchUsers } from "../../types/types";

interface IProps {
  showClear: boolean;
  setAlert: ShowAlert;
  clearUsers: ClearUsers;
  searchUsers: SearchUsers;
}

const Search: React.FC<IProps> = ({
  showClear,
  clearUsers,
  searchUsers,
  setAlert
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (text === "") {
      return setAlert("Please enter something", "light");
    }

    searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-dark btn-block">
          Search
        </button>
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
