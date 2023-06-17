import Head from "next/head";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { NextPage } from "next";
import { NextRouter } from "next/router";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import Model3DLoader from "../model3d-loader";

type props = {
  children: ReactNode;
  router: NextRouter;
};

const LazyLoad3DModel = dynamic(() => import("../model3d"), {
  ssr: false,
  loading: () => <Model3DLoader />,
});

const Main: NextPage<props> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sina's Portfolio" />
        <meta name="author" content="Sina Mohammadian" />
        <meta name="author" content="example" />
        <link rel="apple-touch-icon" href="/public/placeholders/180x180.webp" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Sina Mohammadian" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@example" />
        <meta name="twitter:creator" content="@example" />
        <meta name="twitter:image" content="https://www.example.com/card.png" />
        <meta property="og:site_name" content="Sina Mohammadian" />
        <meta name="og:title" content="Sina Mohammadian" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.example.com/card.png" />
        <title>Sina Mohammadian - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyLoad3DModel />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
