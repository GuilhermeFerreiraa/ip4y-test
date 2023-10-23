import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>h1</Text>
    </View>
  );
}
