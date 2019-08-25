import {
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT
} from "../actionTypes";

export interface IUser {
  id: number;
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  company: string;
  login: string;
  html_url: string;
  followers: string[];
  following: string[];
  public_repos: string[];
  public_gists: string[];
  hireable: boolean;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
}

export interface IAlert {
  type: string;
  message: string;
}

export interface IGithubState {
  users: IUser[];
  user: IUser | {};
  repos: IRepo[];
  loading: boolean;
}

export type AlertStateType = IAlert | null;

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export interface getUsersAction {
  type: typeof GET_USERS;
  payload: IUser[];
}

export interface ClearUsers {
  type: typeof CLEAR_USERS;
}

export interface GetUser {
  type: typeof GET_USER;
  payload: IUser;
}

export interface GetUserRepos {
  type: typeof GET_REPOS;
  payload: IRepo[];
}

export interface SetAlert {
  type: typeof SET_ALERT;
  payload: IAlert;
}

export interface RemoveAlert {
  type: typeof REMOVE_ALERT;
}

export type GithubActionTypes =
  | SetLoadingAction
  | getUsersAction
  | ClearUsers
  | GetUser
  | GetUserRepos;

export type AlertActionTypes = SetAlert | RemoveAlert;
