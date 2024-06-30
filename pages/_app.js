import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(true); // set it as true if you want to launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ChakraProvider>
        <Layout>
          <NextNProgress
            color={isWobRoute?"#85C6DC":"#FF7A19"}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />

          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
