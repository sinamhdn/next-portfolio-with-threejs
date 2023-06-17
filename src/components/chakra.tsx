// @ts-nocheck
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { NextApiRequest } from "next";
import theme from "../lib/theme";

interface ChakraProps {
  cookies: any;
  children: ReactNode;
}

// @ts-ignore
export default function Chakra({ cookies, children }: ChakraProps): void {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
