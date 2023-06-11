import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Job6">
    <Container>
      <Title>
        Job 6 <Badge>2015</Badge>
      </Title>
      <P>
        Fusce a porta ex. Fusce ultricies orci dolor, et semper erat laoreet
        quis. Proin quis sagittis velit, ac facilisis odio. Aenean fringilla
        luctus nisl, id lobortis libero luctus nec. Sed id urna eu erat dapibus
        eleifend et non justo. Nam vestibulum, justo ut facilisis commodo, neque
        nulla egestas nulla, in tristique tellus nisl ac lectus. Vestibulum
        mattis hendrerit arcu non convallis. Mauris dapibus quam ligula, quis
        feugiat orci gravida non. In hac habitasse platea dictumst. Nulla
        placerat congue neque, quis euismod mi sollicitudin sed!
      </P>
      <P>
        Fusce sed pretium risus. Vivamus quis ultricies mi. Nulla id auctor
        arcu. Suspendisse potenti. Proin non consectetur lectus. Fusce eget
        ligula posuere, volutpat purus eu, semper neque. Mauris rhoncus mollis
        mauris, ac dictum enim dapibus id!
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Curabitur sapien neque, tincidunt id quam ut, pretium molestie arcu
        </ListItem>
        <ListItem>Fusce gravida est at nibh posuere</ListItem>
        <ListItem>Mauris eu diam id metus suscipit porttitor</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Integer</Meta>
          <span>Sed</span>
        </ListItem>
        <ListItem>
          <Meta>Curabitur</Meta>
          <span>Quisque laoreet tortor ac lorem viverra cursus</span>
        </ListItem>
        <ListItem>
          <Meta>Pellentesque</Meta>
          <Link href="#">
            Praesent non libero gravida <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Phasellus</Meta>
          <Link href="#">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Malesuada</Meta>
          <Link href="#">
            cras hendrerit erat lectus, non bibendum est semper nec{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link className="link-appstore" href="#" target="_blank">
          <Image
            maxW={240}
            src="/images/200x200.webp"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/720x400.webp" alt="job6" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/600x400.webp" alt="job6" />
        <WorkImage src="/images/600x400.webp" alt="job6" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
