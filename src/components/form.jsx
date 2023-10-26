import { Formik } from "formik";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Link } from "expo-router";

import { Keyboard, TouchableOpacity, View } from "react-native";

import useHomeHook from "~app/hooks/useHomeHook";

import { formatCPF, formatDate } from "~helpers/utils";
import { validationSchema } from "~helpers/validationSchema";

import Button from "./button";

import Dropdown from "./dropdown";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import useUser from "~app/hooks/useUserHook";
import { TextLight, TextRegular, TextSemibold } from "./Text";
import ErrorMessage from "./error-message";
import InputGroup from "./input-group";
import Loader from "./loader";
import { CreateUser } from "~services/createUser";

export default function Form() {
  const { user, isLoading, setIsLoading, statusMessage, setStatusMessage } =
    useHomeHook();

  const { selectedDate, showDatePicker, handleDateChange, setShowDatePicker } =
    useUser();

  const handleCreateUser = (v) => {
    Keyboard.dismiss();
    setIsLoading(true);

    CreateUser(v);

    setTimeout(() => {
      setIsLoading(!true);
      setStatusMessage(true);
    }, 3000);
  };

  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={(v, { resetForm }) => {
        handleCreateUser(v);
        resetForm();
      }}
    >
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        touched,
        resetForm,
      }) => (
        <View className="items-center justify-start mt-4">
          {statusMessage && (
            <TextSemibold textClassName="text-green-400 text-xl">
              Registro feito com sucesso!
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
                    value={formatCPF(values.document)}
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

                <View className="items-start flex justify-start text-white text-sm border-solid border-b-[1px] border-white py-2 px-2 w-[45%] my-2">
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View className="flex-col items-start justify-start">
                      <TextSemibold textClassName="text-white mb-3">
                        Data de Nascimento*
                      </TextSemibold>
                      <TextLight className="text-white text-sm text-left">
                        {selectedDate
                          ? formatDate(selectedDate)
                          : "Selecionar Data de Nasc."}
                      </TextLight>
                    </View>

                    {showDatePicker && (
                      <RNDateTimePicker
                        mode="date"
                        value={values.birthdate}
                        onChange={(event, selectedDate) => {
                          handleDateChange(selectedDate);
                          setFieldValue("birthdate", selectedDate);
                        }}
                      />
                    )}
                  </TouchableOpacity>
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
          <Loader isOpen={isLoading} />
        </View>
      )}
    </Formik>
  );
}
