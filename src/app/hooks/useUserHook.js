import { useGlobalSearchParams, router } from "expo-router";

import { useState, useRef, useEffect } from "react";
import { Platform } from "react-native";

import { deleteUser } from "~services/deleteUser";
import { getUser } from "~services/getUser";
import { updateUser } from "~services/updateUser";

export default function useUser() {
  const { id } = useGlobalSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    id: "",
    name: "",
    lastName: "",
    document: "",
    email: "",
    birthdate: "",
    gender: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const [modalEditVisible, setModalEditVisible] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleUpdateUser = async () => {
    setIsLoading(true);
    const res = await updateUser(user);

    console.log(res);
    setIsLoading(!true);
  };

  const handleDateChange = (e, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");

    if (selectedDate) {
      setSelectedDate(selectedDate);

      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      handleChange("birthdate")(formattedDate);
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

  useEffect(() => {
    async function fetchData() {
      const res = await getUser(id);

      setUser(res);
    }

    fetchData();
  }, []);

  return {
    handleDeleteRegister,
    handleUpdateUser,
    openGenderPicker,
    pickerRef,
    setUser,
    isLoading,
    setIsLoading,
    user,
    modalVisible,
    handleDateChange,
    setModalVisible,
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
    modalEditVisible,
    setModalEditVisible,
  };
}
