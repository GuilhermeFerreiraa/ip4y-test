import Input from "./Input";
import { TextSemibold } from "./Text";

export default function InputGroup({ name, title, value, onChange, ...props }) {
  return (
    <>
      <TextSemibold textClassName="text-sm text-white">{title}</TextSemibold>

      <Input
        value={value}
        keyboardType="default"
        classname="w-full"
        returnKeyType="done"
        onChange={onChange}
        {...props}
      />
    </>
  );
}
