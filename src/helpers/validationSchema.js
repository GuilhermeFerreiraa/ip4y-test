import * as yup from "yup";
import { isValidDate } from "./utils";

export const validationSchema = yup.object().shape({
  name: yup.string().required("*Nome é obrigatório"),
  lastName: yup.string().required("*Sobrenome é obrigatório"),
  email: yup
    .string()
    .email("*E-mail inválido")
    .required("*E-mail é obrigatório"),
  document: yup.string().required("*CPF é obrigatório"),
  birthdate: yup.string().required("*Data de nasc. é obrigatória"),
  gender: yup
    .string()
    .oneOf(["Masculino", "Feminino", "Outros"], "Selecione um gênero válido")
    .required("*Gênero é obrigatório"),
});

export const validationSchemaEdit = yup.object().shape({
  name: yup.string().required("*Nome é obrigatório"),
  lastName: yup.string(),
  email: yup.string().email("*E-mail inválido"),
  document: yup.string(),
  birthdate: yup.string(),
  gender: yup
    .string()
    .oneOf(["Masculino", "Feminino", "Outros"], "Selecione um gênero válido"),
});
