import type { Story, StoryDefault } from "@ladle/react";
import { text } from "./Text.css";

const TEXT_SIZES = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
] as const;

export default {
  title: "Components",
} satisfies StoryDefault;

export const Text: Story = () => {
  return (
    <>
      {TEXT_SIZES.map((size) => (
        <p className={text({ size })}>Yeah buddy light weight - {size}</p>
      ))}
    </>
  );
};
