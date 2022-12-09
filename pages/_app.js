import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Polybase } from "@polybase/client";
import { PolybaseProvider } from "@polybase/react";

const polybase = new Polybase();

function MyApp({ Component, pageProps }) {
  return (
    <PolybaseProvider polybase={polybase}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </PolybaseProvider>
  );
}

export default MyApp;
