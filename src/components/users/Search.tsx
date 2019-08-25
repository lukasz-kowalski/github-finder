import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search: React.FC = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;

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
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
