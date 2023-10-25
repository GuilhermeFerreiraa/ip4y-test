import { TextSemibold } from "./Text";

export default function SectionTitle({ text = "", classname }) {
  return (
    <TextSemibold
      textClassName={!classname ? "text-4xl text-white" : classname}
    >
      {text}
    </TextSemibold>
  );
}
