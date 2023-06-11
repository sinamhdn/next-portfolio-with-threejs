import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job1">
    <Container>
      <Title>
        Vivamus <Badge>2005-2008</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/32x32.webp" alt="icon" />
      </Center>
      <P>Nulla fringilla elit nec mi posuere, non gravida urna rhoncus</P>
      <P>
        「Aenean」Vestibulum elit tellus, malesuada eget elementum ac,
        condimentum eu sem「Vivamus」
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Integer non velit id odio faucibus hendrerit non mattis tellus.
        </ListItem>
        <ListItem>
          Mauris maximus lectus id metus tempor, in dictum lorem fringilla.
        </ListItem>
        <ListItem>
          Duis lobortis rhoncus congue. Ut iaculis quam id mi ultrices, non
          interdum massa finibus. Pellentesque et convallis lacus.
        </ListItem>
        <ListItem>
          Quisque in imperdiet tellus. Vivamus lacinia sollicitudin purus.
        </ListItem>
        <ListItem>
          Ut consequat accumsan sem, et consectetur tellus eleifend ac. Nullam
          ac accumsan leo.
        </ListItem>
        <ListItem>
          Suspendisse viverra justo ac scelerisque varius. Integer dapibus
          mollis iaculis.
        </ListItem>
        <ListItem>
          Phasellus scelerisque ex vitae dolor vulputate, nec venenatis lorem
          vestibulum.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Consectetur</Meta>
          <span>Adipiscing elit</span>
        </ListItem>
        <ListItem>
          <Meta>Amet</Meta>
          <span>Sit</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="#">v0.5.15.123</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2008/03/23</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="#">Mauris</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Pellentesque</Badge>
            「Aenean」Vestibulum elit tellus, malesuada eget elementum ac,
            condimentum eu sem「Vivamus」 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/600x400.svg" alt="job1" />
        <WorkImage src="/images/600x400.svg" alt="job1" />
      </SimpleGrid>
      <WorkImage src="/images/600x400.svg" alt="job1" />
      <WorkImage src="/images/600x400.svg" alt="job1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
