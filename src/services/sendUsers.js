import axios from "axios";

async function SendUsers() {
  try {
    const users = await getUsers();

    const userData = {
      users: users,
    };

    // simulando o envio utilizando o endpoint
    const response = await axios.post(
      "https://api-teste.ip4y.com.br/cadastro",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("unable to send users: ", error);
    throw error;
  }
}

SendUsers()
  .then((data) => {
    console.log("Users send with successful:", data);
  })
  .catch((error) => {
    console.error("unable to send users:", error);
  });
