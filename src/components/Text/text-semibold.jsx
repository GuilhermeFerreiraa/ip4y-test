import { Text } from "react-native";

export default function TextSemibold({ textClassName, children, ...props }) {
  return (
    <Text
      className={textClassName}
      style={{ fontFamily: "Montserrat_600SemiBold" }}
      {...props}
    >
      {children}
    </Text>
  );
}
