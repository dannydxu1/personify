import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto-mono";
import "@fontsource-variable/space-grotesk";

const theme = extendTheme({
  layerStyles: {
    base: {
      color: "red",
    },
    highlighted: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
  fonts: {
    body: "Inter Variable, sans-serif",
    heading: "Inter Variable, sans-serif",
    inter: "Inter Variable, sans-serif",
    grotesk: "Space Grotesk Variable, sans-serif",
    roboto: "Roboto Mono Variable, sans-serif",
  },
  colors: {
    red: "#A30101",
    pink: "#FFC8CC",
    white: "#FFFEFE",
    purple: "#3f0aab",
    gray: "#d1d1d1",
    dark_gray: "#1c1c1c",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: "20px",
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "30px",
      },
    },
  },
});

export default theme;
