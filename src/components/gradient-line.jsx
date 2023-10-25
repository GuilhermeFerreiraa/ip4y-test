import { LinearGradient } from "expo-linear-gradient";

export default function GradientLine({ width, classname, ...props }) {
  return (
    <LinearGradient
      className={`${classname} ${width ? width : 'w-[75%]'} rounded-full border-none max-w-[60%] w-full h-[1px] mt-2`}
      colors={["#00D636", "#00C59F"]}
      end={{ x: 0.1, y: 0.2 }}
      {...props}
    />
  );
}
