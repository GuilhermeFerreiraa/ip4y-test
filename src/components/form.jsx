import { Formik } from "formik";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Link } from "expo-router";

import { View } from "react-native";

import useHomeHook from "~app/hooks/useHomeHook";

import { formatDateToUser } from "~helpers/utils";
import { validationSchema } from "~helpers/validationSchema";

import Button from "./button";

import Dropdown from "./dropdown";

import { TextRegular, TextSemibold } from "./Text";
import ErrorMessage from "./error-message";
import InputGroup from "./input-group";
import Loader from "./loader";

export default function Form() {
  const { onSubmit, user, isLoading, setIsLoading, statusMessage } = useHomeHook();

  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        let data = {
          gender: user.gender,
          ...values,
        };
        onSubmit(data);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched, resetForm }) => (
        <View className="items-center justify-start mt-4">
          {statusMessage && (
            <TextSemibold textClassName="text-green-400 text-xl">
              Registro criado com sucesso!
            </TextSemibold>
          )}
          <KeyboardAwareScrollView className="w-[100%] mx-auto p-2 m-0">
            <View className="flex-col flex-1 bg-background rounded-lg px-2 py-6">
              <View className="my-2 flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="CPF*"
                    maxLength={14}
                    name="document"
                    value={values.document}
                    placeholder="000.000.000-00"
                    keyboardType="decimal-pad"
                    onChange={handleChange("document")}
                  />
                  {touched.document && errors.document && (
                    <ErrorMessage text={errors.document} />
                  )}
                </View>

                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Nome*"
                    placeholder="Seu nome"
                    name="name"
                    onChange={handleChange("name")}
                    value={values.name ? values.name : ""}
                  />

                  {touched.name && errors.name && (
                    <ErrorMessage text={errors.name} />
                  )}
                </View>
              </View>

              <View className="my-2 flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="E-mail*"
                    name="email"
                    value={values.email}
                    placeholder="email@email.com"
                    keyboardType="email-address"
                    onChange={handleChange("email")}
                    classname="w-full lowercase"
                  />

                  {touched.email && errors.email && (
                    <ErrorMessage text={errors.email} />
                  )}
                </View>

                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Sobrenome*"
                    name="lastName"
                    placeholder="Seu Sobrenome"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />

                  {touched.lastName && errors.lastName && (
                    <ErrorMessage text={errors.lastName} />
                  )}
                </View>
              </View>

              <View className="my-2 flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <Dropdown
                    value={values.gender}
                    onChange={(itemValue) => {
                      handleChange("gender")(itemValue);
                    }}
                  />

                  {touched.gender && !user.gender && (
                    <ErrorMessage text={errors.gender} />
                  )}
                </View>

                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Data de nascimento*"
                    name="birthdate"
                    value={formatDateToUser(values.birthdate)}
                    placeholder="dd/mm/aaaa"
                    keyboardType="numeric"
                    onChange={handleChange("birthdate")}
                  />

                  {touched.birthdate && errors.birthdate && (
                    <ErrorMessage text={errors.birthdate} />
                  )}
                </View>
              </View>
            </View>

            <View className="flex items-center justify-around flex-row mt-4 max-w-full">
              <Button text="Inserir" onPress={handleSubmit} />
              <Button text="Recomeçar" onPress={resetForm} />
            </View>

            <View className="mt-12 items-center justify-center">
              <Link href="/users">
                <TextRegular textClassName="text-white underline text-base">
                  Ver todos os registros
                </TextRegular>
              </Link>
            </View>
          </KeyboardAwareScrollView>
          <Loader isOpen={isLoading} setIsOpen={setIsLoading} />
        </View>
      )}
    </Formik>
  );
}
