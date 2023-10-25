import * as yup from "yup";
import { isValidDate } from "./utils";

export const validationSchema = yup.object().shape({
  name: yup.string().required("*nome é obrigatório"),
  lastName: yup.string().required("*sobrenome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("*email é obrigatório"),
  document: yup
    .string()
    // .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    // .test("unique-cpf", "CPF já cadastrado", async function (value) {
    //   const response = await fetch("http://192.168.1.104:80/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ document: value }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     if (data.exists) {
    //       return false;
    //     }
    //   }

    //   return true;
    // })
    .required("*CPF é obrigatório"),
  birthdate: yup
    .string()
    .test("is-valid-date", "Data inválida", (value) => isValidDate(value))
    .required("*data de nasc. é obrigatória"),
  gender: yup
    .string()
    .required("*gênero é obrigatório")
    .oneOf(["Masculino", "Feminino", "Outros"], "Selecione um gênero válido"),
});
