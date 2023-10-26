import axios from "axios";
import { baseURL } from "~helpers/utils";

export const deleteUser = (id) => {
  const options = {
    method: "DELETE",
    url: `${baseURL}/api/users/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    axios
      .request(options)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.log("deleteUser: ", err);
  }
};
