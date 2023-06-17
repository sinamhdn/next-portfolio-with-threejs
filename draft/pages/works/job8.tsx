import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job8">
    <Container>
      <Title>
        Job 8 <Badge>2010</Badge>
      </Title>
      <P>
        Quisque maximus risus vitae neque tempor, in commodo ligula aliquam.
        Vestibulum dui velit, euismod non condimentum a, maximus vitae sem.
        Maecenas nec libero augue. Nam congue molestie quam, a aliquam ligula
        sollicitudin bibendum.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Phasellus</Meta>
          <span>Vestibulum dui</span>
        </ListItem>
        <ListItem>
          <Meta>molestie</Meta>
          <span>Duis scelerisque suscipit felis ac vestibulum</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Pellentesque</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Duis at neque euismod</Badge>
            Pellentesque condimentum nulla et dui finibus.{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="#">
            <Badge mr={2}>Praesent ac urna aliquet</Badge>
            Nam congue molestie quam, a aliquam ligula sollicitudin bibendum.{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/720x400.webp" alt="job8" />
      <WorkImage src="/images/600x400.webp" alt="job8" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
