import { themeClass } from "src/css/theme.css";
import { text } from "src/components/ui/Text";

export default function App() {
  return (
    <main className={themeClass}>
      <p className={text({ size: "2xl" })}>
        The quick brown for jumps over the lazy dog
      </p>
    </main>
  );
}
