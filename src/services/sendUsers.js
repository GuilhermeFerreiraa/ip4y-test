import axios from "axios";

export default async function SendUsers() {
  const users = await getUsers();

  const json = JSON.stringify(users);

  // simulando o envio utilizando o endpoint
  axios
    .post("https://api-teste.ip4y.com.br/cadastro", json, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      console.log("Users send with successful:", data.data);
    })
    .catch((error) => {
      console.error("unable to send users:", error.status);
    });
}
