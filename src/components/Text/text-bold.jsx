import { Text } from "react-native";

export default function TextBold({ textClassName, children, ...props }) {
  return (
    <Text
      className={textClassName}
      style={{ fontFamily: "Montserrat_700Bold" }}
      {...props}
    >
      {children}
    </Text>
  );
}
