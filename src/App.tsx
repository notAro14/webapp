import { Providers } from "src/components/Providers";
import { text } from "src/components/ui/Text";

export default function App() {
  return (
    <Providers>
      <p className={text({ size: "lg" })}>
        The quick brown fox jumps over the lazy dog
      </p>
    </Providers>
  );
}
