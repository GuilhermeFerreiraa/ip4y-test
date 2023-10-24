import { Text } from "react-native";

export default function TextLight({ textClassName, children, ...props }) {
  return (
    <Text
      className={textClassName}
      style={{ fontFamily: "Montserrat_300Light" }}
      {...props}
    >
      {children}
    </Text>
  );
}
