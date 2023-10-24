import { TextSemibold } from "./Text";

export default function SectionTitle({ text = "", style }) {
  return (
    <TextSemibold textClassName={!style ? "text-4xl text-white" : style}>
      {text}
    </TextSemibold>
  );
}
