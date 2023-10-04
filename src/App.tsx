import { text } from "./components/ui/Text";

export default function App() {
  return (
    <main style={{ background: "lightgrey", minHeight: "100dvh" }}>
      <p className={text({ size: "2xl" })}>
        The quick brown for jumps over the lazy dog
      </p>
    </main>
  );
}
