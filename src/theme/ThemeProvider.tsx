import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themeConfig";

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
