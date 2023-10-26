import { FontAwesome } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import useUserHook from "~app/hooks/useUserHook";

import Button from "~components/button";
import Dropdown from "~components/dropdown";
import GradientLine from "~components/gradient-line";
import ModalConfirmAction from "~components/modal";
import SectionTitle from "~components/section-title";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import { TextLight, TextMedium, TextSemibold } from "~components/Text";
import InputGroup from "~components/input-group";
import { validationSchemaEdit } from "~helpers/validationSchema";

import { router } from "expo-router";
import { useEffect } from "react";
import ErrorMessage from "~components/error-message";
import Loader from "~components/loader";
import { formatCPF, formatDate } from "~helpers/utils";
import { getUser } from "~services/getUser";

export default function UserID() {
  const {
    handleDeleteRegister,
    user,
    setUser,
    id,
    modalVisible,
    setModalVisible,
    statusMessage,
    handleUpdateUser,
    showDatePicker,
    selectedDate,
    isLoading,
    setShowDatePicker,
    handleDateChange,
  } = useUserHook();

  useEffect(() => {
    async function fetchData() {
      const res = await getUser(id);
      setUser(res);
    }
    fetchData();
  }, []);

  if (!id) {
    router.replace("/users");
  }

  return (
    <View className="flex items-start justify-start flex-1 bg-bg_light p-4 w-full">
      <View className="w-full my-4">
        <SectionTitle text="Editar Registro" />
        <GradientLine />
      </View>

      <View className="flex-row items-start bg-background rounded-xl">
        <View className="items-center w-1/3 p-2">
          <View className="items-center justify-center w-full">
            <LinearGradient
              className="h-16 w-16 items-center justify-center rounded-full"
              colors={["#00D636", "#00C59F"]}
              end={{ x: 0.1, y: 0.2 }}
            >
              <View className="flex bg-background rounded-full h-[60px] w-[60px] items-center justify-center">
                <FontAwesome name="user-o" size={38} color="#00D636" />
              </View>
            </LinearGradient>
          </View>

          <View className="w-full flex-row items-center justify-center mt-2">
            <FontAwesome name="calendar-o" size={14} color="#00C59F" />
            <TextLight textClassName="text-xs text-white ml-1 text-center">
              {user?.birthdate ? formatDate(user?.birthdate) : "00/00/00"}
            </TextLight>
          </View>
        </View>

        <View className="w-2/3 items-start py-4 text-left">
          <TextLight textClassName="text-white text-xs">
            {user?.document ? formatCPF(user?.document) : "000.000.000-00 "}
          </TextLight>
          <View className="w-full justify-start flex-row items-start overflow-hidden">
            <TextSemibold
              textClassName="text-white text-xl capitalize max-w-[60%]"
              numberOfLines={1}
            >
              {user?.name ? user?.name : "name "}
            </TextSemibold>
            <TextSemibold
              textClassName="text-white text-xl capitalize max-w-[70%]"
              numberOfLines={1}
            >
              {user?.lastName ? user?.lastName : "lastName"}
            </TextSemibold>
          </View>
          <View className="w-full items-start">
            <TextSemibold
              textClassName="text-white text-sm max-w-[65%]"
              numberOfLines={1}
            >
              {user?.email ? user?.email : "email@email.com"}
            </TextSemibold>
          </View>
        </View>
      </View>

      {statusMessage && (
        <View className="items-center w-full my-3">
          <TextMedium textClassName="text-green-400 text-base">
            Registro editado com sucesso!
          </TextMedium>
        </View>
      )}

      <KeyboardAwareScrollView className="pt-4 flex-col w-full">
        <Formik
          initialValues={user}
          validationSchema={validationSchemaEdit}
          onSubmit={(v) => handleUpdateUser(v)}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
          }) => (
            <>
              <View className="my-2 flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Editar nome"
                    name="name"
                    placeholder={user?.name}
                    value={values.name}
                    keyboardType="default"
                    onChange={handleChange("name")}
                  />

                  {touched.email && errors.email && (
                    <ErrorMessage text={errors.email} />
                  )}
                </View>
                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Editar sobrenome"
                    name="lastName"
                    value={values.lastName}
                    keyboardType="default"
                    onChange={handleChange("lastName")}
                    placeholder={user?.lastName}
                  />

                  {touched.lastName && errors.lastName && (
                    <ErrorMessage text={errors.lastName} />
                  )}
                </View>
              </View>

              <View className="my-2 flex items-center justify-around flex-row max-w-full">
                <View className="flex-col w-[45%]">
                  <Dropdown
                    title="Editar gênero"
                    value={values.gender}
                    onChange={(itemValue) => {
                      handleChange("gender")(itemValue);
                    }}
                  />

                  {touched.gender && !user?.gender && (
                    <ErrorMessage text={errors.gender} />
                  )}
                </View>

                <View className="flex-col w-[45%]">
                  <InputGroup
                    title="Editar e-mail"
                    name="email"
                    value={values.email}
                    placeholder={user?.email}
                    keyboardType="email-address"
                    onChange={handleChange("email")}
                    classname="w-full lowercase"
                  />

                  {touched.email && errors.email && (
                    <ErrorMessage text={errors.email} />
                  )}
                </View>
              </View>

              <View className="items-start flex justify-start text-white text-sm border-solid border-b-[1px] border-white py-2 px-2 w-[45%] my-2">
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <View className="flex-col items-start justify-start">
                    <TextSemibold textClassName="text-white mb-3">
                      Editar data de nasc.
                    </TextSemibold>
                    <TextLight className="text-white text-sm text-left">
                      {selectedDate
                        ? formatDate(user?.birthdate)
                        : "Editar Data de Nasc."}
                    </TextLight>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="w-full mt-5 items-center justify-center flex-row px-4">
                <Button text="Editar Registro" onPress={handleSubmit} />
                <View className="mx-4" />
                <Button
                  text="Excluir Registro"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>

              {showDatePicker && (
                <RNDateTimePicker
                  mode="date"
                  minimumDate={new Date(1950, 10, 1)}
                  maximumDate={new Date(2005, 10, 1)}
                  value={new Date()}
                  onChange={(event, selectedDate) => {
                    handleDateChange(selectedDate);
                    setFieldValue("birthdate", selectedDate);
                  }}
                />
              )}
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>

      <ModalConfirmAction
        title="Deseja excluir o registro?"
        description={`Sinta-se à vontade para remover o registro,\ncaso queira poderá adicionar novamente!`}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleConfirmAction={handleDeleteRegister}
      />
      <Loader isOpen={isLoading} />
    </View>
  );
}
