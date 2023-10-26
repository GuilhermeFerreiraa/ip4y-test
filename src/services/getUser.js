import axios from "axios";
import { baseURL } from "~helpers/utils";

export const getUser = (id) => {
  try {
    const options = {
      method: "GET",
      url: `${baseURL}/api/users/${id}`,
      headers: { "Content-Type": "application/json" },
    };

    const res = axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    return res;
  } catch (err) {
    console.log("getUser: ", err);
  }
};
