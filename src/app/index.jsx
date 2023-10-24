import { Stack } from "expo-router";
import { ImageBackground, View } from "react-native";

import backgroundTexture from "../../assets/texture_bg.png";

import LogoTitle from "~components/logo";

import { LinearGradient } from "expo-linear-gradient";

import { TextRegular, TextSemibold } from "~components/Text/index";
import Form from "~components/form";

const headerOptions = {
  title: "iP4y | Instituição de Pagamento",
  animation: "slide_from_bottom",
  headerStyle: { backgroundColor: "#090909" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitle: (props) => <LogoTitle {...props} />,
};

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={headerOptions} />

      <ImageBackground
        className="w-full h-full flex-1"
        style={{ objectFit: "cover" }}
        source={backgroundTexture}
      >
        <View className="flex items-start pl-6 pt-6">
          <TextSemibold textClassName="text-4xl text-white">
            Criar Conta
          </TextSemibold>
          <View>
            <LinearGradient
              className="h-[2px] rounded-full border-none mt-2"
              colors={["#00D636", "#00C59F"]}
              end={{ x: 0.1, y: 0.2 }}
            />
            <TextRegular textClassName="text-base text-white mt-4">
              <TextSemibold>Soluções pensadas</TextSemibold> especialmente para{" "}
              {"\n"} agilizar a <TextSemibold>sua rotina</TextSemibold> e da{" "}
              <TextSemibold>sua empresa</TextSemibold>!
            </TextRegular>
          </View>
        </View>

        <Form />
      </ImageBackground>
    </View>
  );
}
