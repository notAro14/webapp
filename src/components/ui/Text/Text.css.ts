import { cva } from "styled-system/css";

export const text = cva({
  base: {
    fontFamily: "body",
  },
  variants: {
    size: {
      xs: {
        fontSize: "xs",
      },
      sm: {
        fontSize: "sm",
      },
      md: {
        fontSize: "md",
      },
      lg: {
        fontSize: "lg",
      },
      xl: {
        fontSize: "xl",
      },
      "2xl": {
        fontSize: "2xl",
      },
      "3xl": {
        fontSize: "3xl",
      },
      "4xl": {
        fontSize: "4xl",
      },
      "5xl": {
        fontSize: "5xl",
      },
      "6xl": {
        fontSize: "6xl",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
