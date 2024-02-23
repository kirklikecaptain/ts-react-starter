import {  QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./client";

export default function QueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
