import { useRef, useState } from "react";

export default function useHomeHook() {
  const [isLoading, setIsLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState(false);

  const [user, setUser] = useState({
    document: "",
    name: "",
    lastName: "",
    birthdate: new Date(),
    email: "",
    gender: "",
  });

  const pickerRef = useRef();

  const handleOpenDropdownPicker = () => pickerRef.current.focus();

  return {
    isLoading,
    setIsLoading,
    user,
    pickerRef,
    handleOpenDropdownPicker,
    setUser,
    statusMessage,
    setStatusMessage,
  };
}
