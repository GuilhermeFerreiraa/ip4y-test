import axios from "axios";
import { baseURL } from "./createUser";

export const updateUser = (userData) => {
  try {
    const options = {
      method: "PUT",
      url: `${baseURL}/api/users/${userData.id}`,
      headers: { "Content-Type": "application/json" },
      data: { userData },
    };

    const res = axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return res;
  } catch (err) {
    console.log("err updateUser: ", err);
  }
};
