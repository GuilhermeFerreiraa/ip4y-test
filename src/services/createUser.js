import axios from "axios";

export const baseURL = "https://3570-191-5-67-20.ngrok-free.app";

export const CreateUser = (payload) => {
  const options = {
    method: "POST",
    url: `${baseURL}/api/users`,
    headers: { "Content-Type": "application/json" },
    data: payload,
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
    console.error("CreateUser ", err);
  }
};
