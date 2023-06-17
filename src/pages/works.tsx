// @ts-nocheck
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbJob from "../../public/placeholders/720x400.webp";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="job1" title="job1" thumbnail={thumbJob}>
            Maecenas cursus sem in lectus volutpat rhoncus. Aenean nunc dui,
            scelerisque sed odio eu, laoreet mattis ligula
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="job2" title="job2" thumbnail={thumbJob}>
            Maecenas tincidunt ut ante nec bibendum
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="job3" title="job3" thumbnail={thumbJob}>
            Suspendisse et blandit mi, dignissim porta leo. Integer feugiat
            fermentum vehicula
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="job4" thumbnail={thumbJob} title="job4">
            Aenean tempor velit vel imperdiet consequat. Maecenas sed ante
            euismod, pretium est id, molestie quam
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="job5" thumbnail={thumbJob} title="job5">
            Aliquam suscipit diam at urna euismod porta
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="job6" thumbnail={thumbJob} title="job6">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="job7" thumbnail={thumbJob} title="job7">
            Aenean nunc dui, scelerisque sed odio eu, laoreet mattis ligula
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="job8" thumbnail={thumbJob} title="job8">
            In sit amet nibh pulvinar, mollis enim vitae, posuere lorem
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="job9" thumbnail={thumbJob} title="job9">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="job10" thumbnail={thumbJob} title="job10">
            Sed tincidunt lectus id scelerisque lacinia. Nullam et est vitae est
            imperdiet convallis.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export { getServerSideProps } from "../components/chakra";
export default Works;
