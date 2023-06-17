import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="Job5">
    <Container>
      <Title>
        Job 5 <Badge>2022</Badge>
      </Title>
      <P>
        Phasellus eu pretium quam, nec lacinia orci. Duis consequat purus quis
        urna cursus dignissim. Pellentesque quis sodales massa. Nunc porta massa
        eu sapien ultrices dignissim pharetra sed lorem.
      </P>
      <P>
        <Link href="#" target="_blank">
          Aenean eget <ExternalLinkIcon mx="2px" />
        </Link>
        , Ut leo sapien, consectetur sed euismod at, commodo at augue. Nunc
        luctus nisl ac massa imperdiet, at tincidunt lectus tempor. Nullam porta
        faucibus nisl eu dapibus. Praesent at lectus felis. Donec nec pulvinar
        eros, eget auctor enim. Sed dapibus eros sit amet dictum blandit.
        Curabitur feugiat sodales massa, nec faucibus tellus posuere quis.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Convallis</Meta>
          <span>
            <Link href="#" target="_blank">
              Nullam placerat neque sed odio viverra bibendum. Cras sem sem,
              vestibulum et ligula ut, bibendum dapibus metus. Donec in lectus
              ut eros commodo pharetra. <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Vivamus</Meta>
          <span>Suspendisse pretium commodo tortor.</span>
        </ListItem>
        <ListItem>
          <Meta>Mauris</Meta>
          <Link href="#">
            Nulla venenatis viverra risus a accumsan. Sed sapien lacus, ultrices
            quis pellentesque sed, ultrices nec velit. Fusce auctor ante lorem,
            ac imperdiet justo elementum ac. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/placeholders/720x400.webp" alt="job5" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="#"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "none" }}
        ></iframe>
      </AspectRatio>

      <WorkImage src="/placeholders/600x400.webp" alt="job5" />
      <WorkImage src="/placeholders/600x400.webp" alt="job5" />
      <WorkImage src="/placeholders/600x400.webp" alt="job5" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
