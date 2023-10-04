import type { GlobalProvider } from "@ladle/react";
import React from "react";

import "../src/css/reset.css";
import { themeClass } from "../src/css/theme.css";

export const Provider: GlobalProvider = ({ children }) => (
  <main className={themeClass}>{children}</main>
);
