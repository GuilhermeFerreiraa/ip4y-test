import { Text } from "react-native";

export default function TextMedium({ textClassName, children, ...props }) {
  return (
    <Text
      className={textClassName}
      style={{ fontFamily: "Montserrat_500Medium" }}
      {...props}
    >
      {children}
    </Text>
  );
}
