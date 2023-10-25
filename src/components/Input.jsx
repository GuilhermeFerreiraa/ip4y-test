import { TextInput } from "react-native";

export default function Input({
  classname,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  keyboardType,
}) {
  return (
    <TextInput
      name={name}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      keyboardType={keyboardType}
      placeholderTextColor="#fff"
      style={{ fontFamily: "Montserrat_400Regular_Italic" }}
      className={`text-white text-sm border-solid border-b-[1px] border-white py-2 px-2 w-3/4 mx-auto my-2 ${classname}`}
    />
  );
}
