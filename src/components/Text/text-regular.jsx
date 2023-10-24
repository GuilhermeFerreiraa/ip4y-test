import { Text } from "react-native";

export default function TextRegular({ textClassName, children, ...props }) {
  return (
    <Text
      className={textClassName}
      style={{ fontFamily: "Montserrat_400Regular" }}
      {...props}
    >
      {children}
    </Text>
  );
}
