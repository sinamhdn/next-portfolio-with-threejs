import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Job4">
    <Container>
      <Title>
        Job 4 <Badge>2016-</Badge>
      </Title>
      <P>
        Fusce id est massa. In pellentesque non elit ut lobortis. Pellentesque
        hendrerit rutrum rutrum. Pellentesque hendrerit ullamcorper tellus in
        cursus. Aenean dapibus, libero eu tempus placerat, purus metus pulvinar
        justo, vitae tincidunt tellus est et sapien. Nam ornare aliquet
        lobortis. Fusce accumsan, est luctus laoreet ullamcorper, lorem quam
        dapibus erat, nec pellentesque mauris tellus non tellus. Praesent
        feugiat elit in sapien congue porttitor. Donec accumsan tellus nibh, vel
        consequat metus semper a. Nulla posuere lacus sed sem gravida
        vestibulum.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Phasellus hendrerit</Meta>
          <Link href="#">
            Sed imperdiet convallis <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Nullam fringilla</Meta>
          <span>Proin dictum neque vitae euismod</span>
        </ListItem>
        <ListItem>
          <Meta>Curabitur</Meta>
          <span>Sed rhoncus nisi at massa</span>
        </ListItem>
        <ListItem>
          <Meta>Donec</Meta>
          <Link href="#">
            Suspendisse a tellus odio. Vivamus pharetra enim a mi sodales
            posuere. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/placeholders/600x400.webp" alt="job4" />
      <WorkImage src="/placeholders/600x400.webp" alt="job4" />
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
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
