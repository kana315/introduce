import axios, { AxiosResponse } from "axios";

const Client = <T extends object>(): Promise<T> => {
  return axios({
    method: "GET",
    url: "http://localhost:4567",
    headers: { "Content-Type": "application/json" }
  }).then((res: AxiosResponse<T>) => {
    return res.data;
  });
};

export default Client;
