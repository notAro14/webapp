import { defineConfig } from "@pandacss/dev";
import props from "open-props";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      fonts: {
        body: {
          value: props.fontSans,
        },
      },
      fontSizes: {
        xs: {
          value: props.fontSize00,
        },
        sm: {
          value: props.fontSize0,
        },
        md: {
          value: props.fontSize1,
        },
        lg: {
          value: props.fontSize2,
        },
        xl: {
          value: props.fontSize3,
        },
        "2xl": {
          value: props.fontSize4,
        },
        "3xl": {
          value: props.fontSize5,
        },
        "4xl": {
          value: props.fontSize6,
        },
        "5xl": {
          value: props.fontSize7,
        },
        "6xl": {
          value: props.fontSize8,
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
