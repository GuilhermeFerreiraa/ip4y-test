import { TextLight } from "./Text";

export default function ErrorMessage({ text }) {
  return (
    <TextLight textClassName="text-red-400 text-xs">{text}</TextLight>
  );
}
