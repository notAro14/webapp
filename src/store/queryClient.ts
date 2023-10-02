import { QueryClient } from "@tanstack/react-query";
export function setupClient() {
  return new QueryClient({
    // logger: {
    //   log: console.log,
    //   warn: console.warn,
    //   // ✅ no more errors on the console for tests
    //   error: process.env.NODE_ENV === "test" ? () => {} : console.error,
    // },
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });
}
