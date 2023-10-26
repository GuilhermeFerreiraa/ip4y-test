import axios from "axios";
import { baseURL } from "~helpers/utils";

export const updateUser = (userData, id) => {
  const options = {
    method: "PUT",
    url: `${baseURL}/api/users/${id}`,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(userData),
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
