import { router, useGlobalSearchParams } from "expo-router";

import { useRef, useState } from "react";
import { Platform } from "react-native";

import { deleteUser } from "~services/deleteUser";
import { updateUser } from "~services/updateUser";

export default function useUser() {
  const { id } = useGlobalSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusMessage, setStatusMessage] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    document: "",
    email: "",
    birthdate: "",
    gender: "",
  });

  const handleUpdateUser = (values) => {
    function findModifiedAttributes(originalObject, updatedObject) {
      const modifiedAttributes = {};

      for (const key in originalObject) {
        if (originalObject[key] !== updatedObject[key]) {
          modifiedAttributes[key] = updatedObject[key];
        }
      }

      return modifiedAttributes;
    }

    setUser({ ...user, ...values });
    const changes = findModifiedAttributes(user, values);

    const nonEmptyChanges = Object.keys(changes).reduce((acc, key) => {
      if (changes[key] !== undefined && changes[key] !== "") {
        acc[key] = changes[key];
      }
      return acc;
    }, {});

    setIsLoading(true);

    console.log(nonEmptyChanges, id);
    updateUser(nonEmptyChanges, id);
    setIsLoading(!true);
    setStatusMessage(!statusMessage);
    router.replace("/");
  };

  const handleDateChange = (e, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");

    if (selectedDate) {
      setSelectedDate(selectedDate);

      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      return formattedDate;
    }
  };

  const handleDeleteRegister = async () => {
    setModalVisible((prev) => !prev);

    try {
      await deleteUser(user.id);
      return router.back();
    } catch (err) {
      console.log("handleDelete: ", err);
    }
  };

  const pickerRef = useRef();

  const openGenderPicker = () => pickerRef.current.focus();

  return {
    handleDeleteRegister,
    handleUpdateUser,
    openGenderPicker,
    pickerRef,
    setUser,
    isLoading,
    setIsLoading,
    user,
    id,
    modalVisible,
    handleDateChange,
    setModalVisible,
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
    statusMessage,
  };
}
