import props from "open-props";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "src/css/theme.css";

export const text = recipe({
  base: {
    fontFamily: vars.fonts.sans,
  },
  variants: {
    size: {
      xs: {
        fontSize: props.fontSize00,
      },
      sm: {
        fontSize: props.fontSize0,
      },
      md: {
        fontSize: props.fontSize1,
      },
      lg: {
        fontSize: props.fontSize2,
      },
      xl: {
        fontSize: props.fontSize3,
      },
      "2xl": {
        fontSize: props.fontSize4,
      },
      "3xl": {
        fontSize: props.fontSize5,
      },
      "4xl": {
        fontSize: props.fontSize6,
      },
      "5xl": {
        fontSize: props.fontSize7,
      },
      "6xl": {
        fontSize: props.fontSize8,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
