import axios from "axios";
import { IUser } from "../types/interfaces";

interface IResponse {
  data: {
    items: IUser[];
  };
}

export default class httpService {
  getGH = async (endpoint: string): Promise<IResponse> => {
    const url = `https://api.github.com/${endpoint}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `;
    return axios.get(url);
  };
}
