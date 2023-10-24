import { Image, Text, View } from "react-native";

import logo from "../../assets/logo.png";
import { TextMedium } from "./Text";

export default function LogoTitle() {
  return (
    <View className="w-full justify-start h-9 max-w-[100%] items-center flex flex-row">
      <Image
        className="max-w-[15%] h-[100%]"
        style={{ objectFit: "contain" }}
        source={logo}
      />
      <View className="h-full w-[1px] bg-white mx-2" />
      <TextMedium className="font-thin text-white ">
        Instituição{"\n"}de Pagamento
      </TextMedium>
    </View>
  );
}
