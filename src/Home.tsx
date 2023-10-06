import { text } from "src/components/ui/Text";
export function Home() {
  return (
    <main>
      <p className={text({ size: "lg" })}>
        The quick brown fox jumps over the lazy dog
      </p>
    </main>
  );
}
