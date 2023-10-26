import axios from "axios";
import { baseURL, formatDateToString, validateEmail } from "~helpers/utils";

export const CreateUser = (payload) => {
  if (!validateEmail(payload.email)) {
    return console.error("email invalid");
  }

  const userData = {
    name: payload.name,
    lastName: payload.lastName,
    document: payload.document.replace(/\D/g, ""),
    gender: payload.gender,
    email: payload.email,
    birthdate: formatDateToString(payload.birthdate),
  };

  const options = {
    method: "POST",
    url: `${baseURL}/api/users`,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(userData),
  };

  axios
    .request(options)
    .then((response) => {
      console.log("createUser: ", response);
      return response.data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};
