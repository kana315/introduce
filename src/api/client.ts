import axios, { AxiosResponse } from "axios";

const Client = () => {
  return axios({
    method: "GET",
    url: "http://localhost:4567",
    headers: { "Content-Type": "application/json" }
  }).then((res: AxiosResponse) => {
    return res.data;
  });
};

export default Client;
