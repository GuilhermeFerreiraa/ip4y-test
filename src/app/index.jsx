import { Stack } from "expo-router";

import { ImageBackground, View } from "react-native";

import backgroundTexture from "../../assets/texture_bg.png";

import { TextRegular, TextSemibold } from "~components/Text/index";

import Form from "~components/form";

import GradientLine from "~components/gradient-line";

import LogoTitle from "~components/logo";

import SectionTitle from "~components/section-title";

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
        <View className="w-full flex items-start pl-6 pt-4">
          <SectionTitle text="Criar Conta" classname="text-4xl text-white" />
          <GradientLine classname="max-w-[60%] mt-2 h-[1px]" />
          <View>
            <TextRegular textClassName="text-base text-white mt-2">
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
