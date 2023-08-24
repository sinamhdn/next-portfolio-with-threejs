// @ts-nocheck
import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";

import thumbJob from "../../public/placeholders/720x400.webp";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Nullam I&apos;eu sapien faucibus tortor placerat porttitor. Phasellus
        nec rhoncus elit
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sina Mohammadian
          </Heading>
          <p>Developer / Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/placeholders/dummy_200x200_212121_e53935.webp"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Fusce sit amet lacus quis purus imperdiet faucibus ut non felis.
          Vivamus dapibus, tellus vel fringilla accumsan, urna nisi venenatis
          augue, sed consequat elit metus convallis augue. Integer sit amet dui
          cursus, rhoncus mauris in, sodales libero. Mauris nisi ligula, porta
          quis arcu dapibus, porta consequat nisl. Maecenas eget metus sed
          ligula rutrum pellentesque vitae ut justo.{" "}
          {/* <Link as={NextLink} href="/works/job1" passHref scroll={false}> */}
          <Link as={NextLink} href="/works/job1" scroll={false}>
            Job 01&nbsp;
          </Link>
          Donec sit amet metus porta, accumsan augue ut, mollis risus.{" "}
          <Link as={NextLink} target="_blank" href="#" passHref>
            Donec sit amet&nbsp;
          </Link>
          Nullam facilisis justo id metus interdum ornare. Aenean in nunc arcu.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Quisque ut neque rhoncus, iaculis mi at, consectetur neque.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Maecenas eget metus sed ligula rutrum pellentesque vitae ut justo
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Quisque varius sem in massa luctus, sed luctus leo congue
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Suspendisse eu elit ornare magna malesuada lacinia
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Purus, Faucibus,{" "}
          <Link href="#" target="_blank">
            Quisque
          </Link>
          , Himenaeos,{" "}
          <Link href="#" target="_blank">
            Imperdiet
          </Link>
          , Volutpat, Aliquam fringilla
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @bibendum
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bibendum
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bibendum
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @bibendum
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="#" title="post1" thumbnail={thumbJob}>
            Duis suscipit libero non quam facilisis interdum
          </GridItem>
          <GridItem href="#" title="job1" thumbnail={thumbJob}>
            Suspendisse feugiat, turpis ac pretium rhoncus
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
