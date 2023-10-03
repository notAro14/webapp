import { text } from "./components/ui/Text";

export default function App() {
  return (
    <p className={text({ size: "2xl" })}>
      The quick brown for jumps over the lazy dog
    </p>
  );
}
