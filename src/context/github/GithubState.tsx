import React, { useReducer, useCallback } from "react";
import { http } from "../../App";
import { IGithubState, GithubActionTypes } from "../../types/interfaces";
import GithubContext from "./GithubContext";
import githubReducer from "../../reducers/githubReducer";
import {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from "../../actionTypes";
import { IUser } from "../../types/interfaces";

interface IProps {
  children: React.ReactNode;
}

const GithubState: React.FC<IProps> = ({ children }) => {
  const initialState: IGithubState = {
    users: [],
    user: {} as IUser,
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer<
    React.Reducer<IGithubState, GithubActionTypes>
  >(githubReducer, initialState);

  const setLoading = useCallback(() => dispatch({ type: SET_LOADING }), []);

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const searchUsers = async (text: string): Promise<void> => {
    setLoading();

    const endpoint = `search/users?q=${text}`;
    const res = await http.getGH(endpoint);

    dispatch({ type: GET_USERS, payload: res.data.items });
  };

  const getUser = useCallback(
    async (userName: string): Promise<void> => {
      setLoading();

      const endpoint = `users/${userName}?`;
      const res = await http.getGH(endpoint);

      dispatch({ type: GET_USER, payload: res.data });
    },
    [setLoading]
  );

  const getUsers = (users: IUser[]) =>
    dispatch({ type: GET_USERS, payload: users });

  const getUserRepos = useCallback(
    async (userName: string): Promise<void> => {
      setLoading();

      const endpoint = `users/${userName}/repos?per_page=5&sort=created:asc`;
      const res = await http.getGH(endpoint);

      dispatch({ type: GET_REPOS, payload: res.data });
    },
    [setLoading]
  );

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUsers,
        getUserRepos,
        setLoading
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
