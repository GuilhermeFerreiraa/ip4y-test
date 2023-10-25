import { LinearGradient } from "expo-linear-gradient";
import { TextMedium } from "./Text";
import { TouchableOpacity } from "react-native";

export default function Button({ onPress, text }) {
  return (
    <LinearGradient
      className="h-10 w-[45%] border-none items-center justify-center"
      colors={["#00C59F", "#00D636"]}
      end={{ x: 0.1, y: 0.2 }}
    >
      <TouchableOpacity
        onPress={onPress}
        className="w-[97.5%] bg-background items-center py-[9px]"
      >
        <TextMedium textClassName="text-white">{text}</TextMedium>
      </TouchableOpacity>
    </LinearGradient>
  );
}
