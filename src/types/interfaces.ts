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
