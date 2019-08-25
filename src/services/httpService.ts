import axios from "axios";
import { Env } from "../types/types";

let githubClientId: Env;
let githubClientSecret: Env;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

export default class httpService {
  getGH = async (endpoint: string): Promise<any> => {
    const url = `https://api.github.com/${endpoint}&client_id=${githubClientId}&client_secret=${githubClientSecret} `;
    return axios.get(url);
  };
}
