import { Theme } from "@radix-ui/themes";
import { QueryClientProvider } from "@tanstack/react-query";

import { setupClient } from "../store/queryClient";

const queryClient = setupClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>{children}</Theme>
    </QueryClientProvider>
  );
}
