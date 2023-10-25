import { TouchableOpacity, View } from "react-native";

import { TextLight, TextSemibold } from "./Text";

import { Picker } from "@react-native-picker/picker";

import useHomeHook from "~app/hooks/useHomeHook";

export default function Dropdown({ value, onChange, title = "" }) {
  const { handleOpenDropdownPicker, pickerRef } = useHomeHook();

  return (
    <>
      <TextSemibold textClassName="text-sm text-white">
        {title ? title : "Gênero*"}
      </TextSemibold>

      <View className="text-white text-sm border-solid border-b-[1px] border-white py-3 px-2 w-full mx-auto my-2">
        <TouchableOpacity onPress={handleOpenDropdownPicker}>
          <TextLight
            textClassName="text-white text-sm"
            style={{ fontFamily: "Montserrat_400Regular_Italic" }}
          >
            {value ? value : "Selecione seu gênero"}
          </TextLight>
        </TouchableOpacity>
      </View>

      <View className="hidden">
        <Picker ref={pickerRef} selectedValue={value} onValueChange={onChange}>
          <Picker.Item enabled={false} label="Selecione um Gênero" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>
      </View>
    </>
  );
}
