// @ts-nocheck
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbJob from "../../public/placeholders/720x400.webp";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Post 01" thumbnail={thumbJob} href="#" />
          <GridItem title="Post 02" thumbnail={thumbJob} href="#" />
          <GridItem title="Post 03" thumbnail={thumbJob} href="#" />
          <GridItem title="Post 04" thumbnail={thumbJob} href="#" />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Post 05" thumbnail={thumbJob} href="#" />
          <GridItem title="Post 06" thumbnail={thumbJob} href="#" />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Post 07" thumbnail={thumbJob} href="#" />
          <GridItem title="Post 08" thumbnail={thumbJob} href="#" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";
