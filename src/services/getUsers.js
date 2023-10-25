import axios from "axios";
import { baseURL } from "./createUser";

export const getUsers = () => {
  const options = {
    method: "GET",
    url: `${baseURL}/api/users`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const res = axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.log(err);
  }
};
