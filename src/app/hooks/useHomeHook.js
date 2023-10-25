import { useRef, useState } from "react";
import { Keyboard } from "react-native";
import { CreateUser } from "~services/createUser";

export default function useHomeHook() {
  const [isLoading, setIsLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState(false);

  const [user, setUser] = useState({
    document: "",
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    gender: "",
  });

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsLoading(true);

    try {
      CreateUser(values);

      setTimeout(() => {
        setStatusMessage(true);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const pickerRef = useRef();

  const handleOpenDropdownPicker = () => pickerRef.current.focus();

  return {
    isLoading,
    setIsLoading,
    user,
    pickerRef,
    handleOpenDropdownPicker,
    setUser,
    onSubmit,
    statusMessage,
    setStatusMessage,
  };
}
