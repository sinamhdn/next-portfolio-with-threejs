import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job10">
    <Container>
      <Title>
        Job 10 <Badge>2011-2016</Badge>
      </Title>
      <P>
        Maecenas non arcu sed felis fermentum elementum blandit nec justo. Duis
        nec purus sed massa cursus gravida. Aliquam erat volutpat. Cras mollis
        luctus bibendum. Curabitur dictum pulvinar bibendum. Aliquam
        sollicitudin nec massa sit amet pulvinar!
      </P>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mauris</Meta>
          <span>Integer</span>
        </ListItem>
        <ListItem>
          <Meta>Morbi suscipit</Meta>
          <Link href="#">
            Etiam at hendrerit turpis. Cras hendrerit pharetra condimentum{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Sed</Meta>
          <span>
            Mauris libero diam, sollicitudin vel elementum non, luctus non orci
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Mauris at consequat</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Aliquam sollicitudin</Badge>
            Nullam rhoncus risus vitae tellus vehicula rhoncus
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#">
            <Badge mr={2}>nullam</Badge>
            Mauris libero diam, sollicitudin vel elementum non, luctus non orci
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#">
            <Badge mr={2}>Volutpat</Badge>
            Quisque vitae mollis dolor. Mauris sodales rhoncus dui ac tristique
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>Mauris libero</Badge>
          <Link href="#">
            Nam blandit nisl et lectus scelerisque scelerisque vel auctor justo
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/600x400.svg" alt="job10" />
        <WorkImage src="/images/600x400.svg" alt="job10" />
      </SimpleGrid>
      <WorkImage src="/images/600x400.svg" alt="job10" />
      <WorkImage src="/images/600x400.svg" alt="job10" />
      <WorkImage src="/images/600x400.svg" alt="job10" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
