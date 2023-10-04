import { createTheme } from "@vanilla-extract/css";
import props from "open-props";

export const [themeClass, vars] = createTheme({
  fonts: {
    sans: props.fontSans,
  },
});
